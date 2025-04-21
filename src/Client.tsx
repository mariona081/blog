import { createClient } from "@sanity/client";

export default createClient({
    projectId: "0p6vf6ut",
    dataset: "production",
    useCdn: true,
    apiVersion: "2025-04-13",
    token: import.meta.env.VITE_SANITY_TOKEN
})