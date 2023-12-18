import axios from "axios";
import { API_URL_SEARCH } from "../http/url";

export default class HistogramsService {
    static async histograms(dataStart, dataEnd, inn, fullness, limit) {
        return await axios.post(`${API_URL_SEARCH}/objectsearch/histograms`, 
        
        {
            "issueDateInterval": {
                "startDate": dataStart,
                "endDate": dataEnd
              },
              "searchContext": {
                "targetSearchEntitiesContext": {
                  "targetSearchEntities": [
                    {
                      "type": "company",
                      "sparkId": null,
                      "entityId": null,
                      "inn": inn,
                      "maxFullness": fullness,
                      "inBusinessNews": null
                    }
                  ],
                  "onlyMainRole": true,
                  "tonality": "any",
                  "onlyWithRiskFactors": false,
                  "riskFactors": {
                    "and": [],
                    "or": [],
                    "not": []
                  },
                  "themes": {
                    "and": [],
                    "or": [],
                    "not": []
                  }
                },
                "themesFilter": {
                  "and": [],
                  "or": [],
                  "not": []
                }
              },
              "searchArea": {
                "includedSources": [],
                "excludedSources": [],
                "includedSourceGroups": [],
                "excludedSourceGroups": []
              },
              "attributeFilters": {
                "excludeTechNews": true,
                "excludeAnnouncements": true,
                "excludeDigests": true
              },
              "similarMode": "duplicates",
              "limit": Number(limit),
              "sortType": "sourceInfluence",
              "sortDirectionType": "desc",
              "intervalType": "month",
              "histogramTypes": [
                "totalDocuments",
                "riskFactors"
              ]
          },
        {headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }}
        )
    }       
}