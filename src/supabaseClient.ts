import { createClient } from "@supabase/supabase-js"; 

const supabaseUrl = 'https://ycljwqibrzwzpdfkgiqz.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljbGp3cWlicnp3enBkZmtnaXF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzNzI3MTEsImV4cCI6MjA2Njk0ODcxMX0.KO03MyiO3vLhDM0UxLxED_1JmCYShw-cAIyqNL3Vv5s'


export const supabase = createClient(supabaseUrl, supabaseAnonKey) 