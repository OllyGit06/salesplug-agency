-- Create leads table to store form submissions
CREATE TABLE public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT NOT NULL,
  country TEXT NOT NULL,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  ip_address TEXT,
  user_agent TEXT
);

-- Enable RLS on leads table
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert leads (public form)
CREATE POLICY "Anyone can submit leads"
  ON public.leads
  FOR INSERT
  WITH CHECK (true);

-- Create video_settings table for admin-managed video configuration
CREATE TABLE public.video_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  video_type TEXT NOT NULL CHECK (video_type IN ('youtube', 'mp4')),
  video_url TEXT NOT NULL,
  is_enabled BOOLEAN DEFAULT true,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_by UUID REFERENCES auth.users(id)
);

-- Enable RLS on video_settings
ALTER TABLE public.video_settings ENABLE ROW LEVEL SECURITY;

-- Policy: Everyone can read video settings (to display video)
CREATE POLICY "Anyone can view video settings"
  ON public.video_settings
  FOR SELECT
  USING (is_enabled = true);

-- Create user_roles table for admin access control
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('admin', 'user')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view their own role
CREATE POLICY "Users can view own role"
  ON public.user_roles
  FOR SELECT
  USING (auth.uid() = user_id);

-- Security definer function to check admin role
CREATE OR REPLACE FUNCTION public.is_admin(user_id UUID)
RETURNS BOOLEAN
LANGUAGE SQL
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_roles.user_id = is_admin.user_id
    AND role = 'admin'
  );
$$;

-- Policy: Only admins can view all leads
CREATE POLICY "Admins can view all leads"
  ON public.leads
  FOR SELECT
  USING (public.is_admin(auth.uid()));

-- Policy: Only admins can manage video settings
CREATE POLICY "Admins can manage video settings"
  ON public.video_settings
  FOR ALL
  USING (public.is_admin(auth.uid()))
  WITH CHECK (public.is_admin(auth.uid()));

-- Insert default video settings
INSERT INTO public.video_settings (video_type, video_url, is_enabled)
VALUES ('youtube', '', false);

-- Create index for faster lookups
CREATE INDEX idx_leads_email ON public.leads(email);
CREATE INDEX idx_leads_submitted_at ON public.leads(submitted_at DESC);
CREATE INDEX idx_user_roles_user_id ON public.user_roles(user_id);