// supabase.js
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://rduhwmcetjpdhxkakjly.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkdWh3bWNldGpwZGh4a2Framx5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3NDU2NzgsImV4cCI6MjA2NDMyMTY3OH0.bGjEm708SB-Y_dig7mO0zCMaBvpO4sjU1iI7dbDbAxA";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
