// dataStore.js

class DataManager {
    static instance = null;
    store = {
        users: JSON.parse(localStorage.getItem('users')) || [],
        properties: JSON.parse(localStorage.getItem('properties')) || [],
        bookings: JSON.parse(localStorage.getItem('bookings')) || []
    };

    static getInstance() {
        if (!DataManager.instance) {
            DataManager.instance = new DataManager();
        }
        return DataManager.instance;
    }

    getUsers() {
        return this.store.users;
    }

    getProperties() {
        return this.store.properties;
    }

    getBookings() {
        return this.store.bookings;
    }

    addUser(user) {
        this.store.users.push(user);
        localStorage.setItem('users', JSON.stringify(this.store.users));
    }

    addProperty(property) {
        this.store.properties.push(property);
        localStorage.setItem('properties', JSON.stringify(this.store.properties));
    }

    addBooking(booking) {
        this.store.bookings.push(booking);
        localStorage.setItem('bookings', JSON.stringify(this.store.bookings));
    }

    findUser(email, password) {
        return this.store.users.find(u => u.email === email && u.password === password);
    }

    userExists(email) {
        return this.store.users.some(u => u.email === email);
    }
}

// Export the singleton instance of DataManager
export default DataManager.getInstance();