export const BaseUrl = 'https://shippex-demo.bc.brandimic.com';

export const baseURL = `${BaseUrl}/api/method`;

// Auth
export const postLogin = `${baseURL}/login`;

// Shipments
export const getShipmentsList = `${baseURL}/frappe.client.get_list?doctype=AWB&fields=["status", "name", "origin_state", "origin_country", "destination_country", "destination_state","destination_city", "origin_city"]`;
