import resources from "../environments/resources"

export const journalService = () => {
  return {
    save: (journal) => {
      const request = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(journal)
      };
      return fetch(resources.microserviceUrl + resources.journalResources.url, request);
    }
  }
}

export default journalService;
