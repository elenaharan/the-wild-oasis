import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://bwzhikiaoptxqridhixn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrb2V3amtyaGl5anNubnVqZHRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIwNTA1NTMsImV4cCI6MjA1NzYyNjU1M30.XwmG-4HXkIDGlU34Ucr-Bl6hUNu0691HhAFFNL-8aHI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
