export default async () => {
    try {
        const response = await fetch('http://localhost:1337/products');
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        // Do something with the data, such as logging it to the console
        console.log(data);
    } catch (error) {
        // Handle any errors that occur during the fetch
        console.error('Error fetching data:', error);
    }
};