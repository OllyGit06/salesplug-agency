import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Loader2, Video, Users, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [leads, setLeads] = useState<any[]>([]);
  const [videoSettings, setVideoSettings] = useState({
    type: "youtube" as "youtube" | "mp4",
    url: "",
  });
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    checkAdminAccess();
  }, []);

  const checkAdminAccess = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast({
          title: "Access Denied",
          description: "Please log in to access admin panel.",
          variant: "destructive",
        });
        navigate("/auth");
        return;
      }

      // Check if user is admin
      const { data: roleData, error: roleError } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id)
        .single();

      if (roleError || !roleData || roleData.role !== "admin") {
        toast({
          title: "Access Denied",
          description: "You don't have admin privileges.",
          variant: "destructive",
        });
        navigate("/");
        return;
      }

      setIsAdmin(true);
      fetchLeads();
      fetchVideoSettings();
    } catch (error) {
      console.error("Error checking admin access:", error);
      navigate("/");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchLeads = async () => {
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("submitted_at", { ascending: false });

    if (error) {
      console.error("Error fetching leads:", error);
      toast({
        title: "Error",
        description: "Failed to load leads.",
        variant: "destructive",
      });
    } else {
      setLeads(data || []);
    }
  };

  const fetchVideoSettings = async () => {
    const { data, error } = await supabase
      .from("video_settings")
      .select("*")
      .order("updated_at", { ascending: false })
      .limit(1)
      .single();

    if (error) {
      console.error("Error fetching video settings:", error);
    } else if (data) {
      setVideoSettings({
        type: data.video_type as "youtube" | "mp4",
        url: data.video_url,
      });
    }
  };

  const handleSaveVideo = async () => {
    setIsSaving(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();

      // Delete old settings and insert new
      await supabase.from("video_settings").delete().neq("id", "00000000-0000-0000-0000-000000000000");

      const { error } = await supabase.from("video_settings").insert({
        video_type: videoSettings.type,
        video_url: videoSettings.url,
        is_enabled: true,
        updated_by: user?.id,
      });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Video settings updated successfully.",
      });
    } catch (error: any) {
      console.error("Error saving video settings:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to save video settings.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/auth");
  };

  const exportLeadsCSV = () => {
    const headers = ["Name", "Email", "Phone", "Company", "Country", "Submitted At"];
    const csvContent = [
      headers.join(","),
      ...leads.map(lead => [
        lead.name,
        lead.email,
        lead.phone,
        lead.company,
        lead.country,
        new Date(lead.submitted_at).toLocaleString()
      ].join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          <Button onClick={handleLogout} variant="outline">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>

        <Tabs defaultValue="video" className="space-y-6">
          <TabsList>
            <TabsTrigger value="video">
              <Video className="mr-2 h-4 w-4" />
              Video Settings
            </TabsTrigger>
            <TabsTrigger value="leads">
              <Users className="mr-2 h-4 w-4" />
              Leads ({leads.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="video">
            <Card>
              <CardHeader>
                <CardTitle>Video Configuration</CardTitle>
                <CardDescription>
                  Manage the video displayed on the landing page
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="videoType">Video Type</Label>
                  <select
                    id="videoType"
                    value={videoSettings.type}
                    onChange={(e) => setVideoSettings({ ...videoSettings, type: e.target.value as "youtube" | "mp4" })}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="youtube">YouTube</option>
                    <option value="mp4">MP4</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="videoUrl">Video URL</Label>
                  <Input
                    id="videoUrl"
                    type="text"
                    value={videoSettings.url}
                    onChange={(e) => setVideoSettings({ ...videoSettings, url: e.target.value })}
                    placeholder={videoSettings.type === "youtube" ? "https://youtube.com/watch?v=..." : "https://example.com/video.mp4"}
                  />
                </div>

                <Button onClick={handleSaveVideo} disabled={isSaving}>
                  {isSaving ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    "Save Video Settings"
                  )}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="leads">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Lead Submissions</CardTitle>
                    <CardDescription>
                      View and export all form submissions
                    </CardDescription>
                  </div>
                  <Button onClick={exportLeadsCSV} variant="outline" disabled={leads.length === 0}>
                    Export CSV
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Country</TableHead>
                      <TableHead>Submitted</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {leads.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center text-muted-foreground">
                          No leads submitted yet
                        </TableCell>
                      </TableRow>
                    ) : (
                      leads.map((lead) => (
                        <TableRow key={lead.id}>
                          <TableCell>{lead.name}</TableCell>
                          <TableCell>{lead.email}</TableCell>
                          <TableCell>{lead.phone}</TableCell>
                          <TableCell>{lead.company}</TableCell>
                          <TableCell>{lead.country}</TableCell>
                          <TableCell>{new Date(lead.submitted_at).toLocaleString()}</TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
