// api.ts
const BASE_URL = 'http://localhost:8000'; // Replace with your API base URL

// Function to handle GET requests
export const fetchData = async (endpoint: string): Promise<unknown> => {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`);
        console.log("hello ",response)
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Fetch Data Error:', error);
        throw error;
    }
};



// // Function to handle POST requests
// export const createData = async (endpoint: string, data: object): Promise<unknown> => {
//     try {
//         const response = await fetch(`${BASE_URL}${endpoint}`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data),
//         });
//         if (!response.ok) {
//             throw new Error(`Error: ${response.status} ${response.statusText}`);
//         }
//         return await response.json();
//     } catch (error) {
//         console.error('Create Data Error:', error);
//         throw error;
//     }
// };

// // Function to handle PUT requests
// export const updateData = async (endpoint: string, data: object): Promise<unknown> => {
//     try {
//         const response = await fetch(`${BASE_URL}${endpoint}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data),
//         });
//         if (!response.ok) {
//             throw new Error(`Error: ${response.status} ${response.statusText}`);
//         }
//         return await response.json();
//     } catch (error) {
//         console.error('Update Data Error:', error);
//         throw error;
//     }
// };

// // Function to handle DELETE requests
// export const deleteData = async (endpoint: string): Promise<unknown> => {
//     try {
//         const response = await fetch(`${BASE_URL}${endpoint}`, {
//             method: 'DELETE',
//         });
//         if (!response.ok) {
//             throw new Error(`Error: ${response.status} ${response.statusText}`);
//         }
//         return await response.json();
//     } catch (error) {
//         console.error('Delete Data Error:', error);
//         throw error;
//     }
// };
