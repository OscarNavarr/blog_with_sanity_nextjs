import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn,token } from "../sanity/env";

const client_sanity = createClient({
    projectId: projectId,
    dataset: dataset,
    apiVersion: apiVersion,
    useCdn: useCdn,
    token: token,
});

export default client_sanity;