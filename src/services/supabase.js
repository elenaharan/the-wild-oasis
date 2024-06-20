import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://bwzhikiaoptxqridhixn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3emhpa2lhb3B0eHFyaWRoaXhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgyNTU5NjMsImV4cCI6MjAzMzgzMTk2M30.sysL4haVOnYBJegQHDW29S2bFOMQ9An7GJDD3zZ-XN4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
