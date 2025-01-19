import { getConfig } from "./config";

export const fetchData = async (endpoint: string, queryParams: Record<string, string> = {}) => {
    try {
      const { backendUrl } = getConfig();
      const queryString = new URLSearchParams(queryParams).toString();
      const url = queryString ? `${backendUrl}${endpoint}?${queryString}` : `${backendUrl}${endpoint}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error al hacer la solicitud:', error);
      throw error;
    }
  };
  