import { useState } from "react";
import axios from "../services/axiosConfig";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async (url: any, method: any, body = null) => {
    setLoading(true);

    try {
      const response = await axios({ url, method, data: body });

      return response;
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { request, loading, error };
};
