import axiosClient from "@/api/axiosClient";
import { BasicResponse } from "@/types/Basics";
import { BoitierRequest } from "./BoitierDTO";


/**
 * Service to retrieve List of Pending sims for create a new boitier
 * @param page: number
 * @param size: number
 * @returns Promise<BasicResponse>
 * @throws Error
 */
export const getPendingSims = async (page: number, size: number): Promise<BasicResponse> => {
    try {
        const { data } = await axiosClient.get(`/stock-api/sim/pending/?page=${page}&size=${size}`);
        console.log("Response from retrieve  pending sims", data);
        return data;
    } catch (error: any) {
        console.error("Error from retrievePendingSims", error.response.data);
        throw error.response.data;
    }
}

/**
 * Service to retrieve searched List of Boitiers
 * @param query: string
 * @param page: number
 * @param size: number
 * @returns Promise<BasicResponse>
 * @throws Error
 */

export const searchPendingSims = async (query: string, page: number, size: number): Promise<BasicResponse> => {
    try {
        const { data } = await axiosClient.get(`/stock-api/sim/pending/search/?query=${query}&page=${page}&size=${size}`);
        console.log("Response from retrieveSearchSims", data);
        return data;
    } catch (error: any) {
        const { data } = error.response.data;
        console.error("Error from retrieveSearchSims", error);
        throw error.response.data;
    }
}

/**
 * Service to retrieve List of devices with not installed status for create a new boitier
 * @param page: number
 * @param size: number
 * @returns Promise<BasicResponse>
 * @throws Error
 */

export const getNotInstalledDevices = async (page: number, size: number): Promise<BasicResponse> => {
    try {
        const { data } = await axiosClient.get(`/stock-api/devices/not-installed/?page=${page}&size=${size}`);
        console.log("Response from retrievePendingDevices", data);
        return data;
    } catch (error: any) {
        const { data } = error.response.data;
        console.error("Error from retrievePendingDevices", data);
        throw data;
    }
}

/**
 * Service to retrieve searched List of Devices
 * @param imei: string
 * @param page: number
 * @param size: number
 * @returns Promise<BasicResponse>
 * @throws Error
 */

export const searchNotInstalledDevices = async (imei: string, page: number, size: number): Promise<BasicResponse> => {
    try {
        const { data } = await axiosClient.get(`/stock-api/devices/not-installed/search/?imei=${imei}&page=${page}&size=${size}`);
        console.log("Response from retrieveSearchDevices", data);
        return data;
    } catch (error: any) {
        const { data } = error.response.data;
        console.error("Error from retrieve searchDevices", error.response.data);
        throw error.response.data;
    }
}

/**
 * Service to create a new Boitier
 * @param boitierRequest: BoitierRequest
 * @returns Promise<void>
 * @throws Error
 */

export const createBoitierApi = async (boitierRequest: BoitierRequest): Promise<BasicResponse> => {
    try {
        const { data } = await axiosClient.post('/vehicle-api/boitier/', boitierRequest);
        console.log('Boitier created successfully:', data);
        return data;
    } catch (error: any) {
        // console.error('Error creating boitier:', error);
        const data = error.response.data;
        throw data;
    }
};

/**
 * SERVICE TO DELETE A BOITIER BY ID
 * 
 * @param id: number
 * @param isLost: boolean
 * @returns Promise<BasicResponse>
 * @throws Error
 */

export const deleteBoitierApi = async (id: number | null, isLost: boolean): Promise<BasicResponse> => {
    if (!id) {
        throw new Error('Boitier ID is required');
    }
    else {
        try {
            const { data } = await axiosClient.delete(`/vehicle-api/boitier/${id}/?isLost=${isLost}`);
            console.log('Boitier deleted successfully:', data);
            return data;
        } catch (error: any) {
            console.error('Error deleting boitier:', error);
            throw error.response.data;
        }
    }

}

