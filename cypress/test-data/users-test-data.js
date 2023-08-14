
export const users = [
    {
        testName: "All data is valid",
        first_name: '1_name',
        last_name: '1_surname',
        email: 'test111@gmail.com',
        comment: 'Test text 1'
    },
    {
        testName: "Empty email",
        first_name: '2_name',
        last_name: '2_surname',
        email: ' ',
        comment: 'Test text 2'
    },
    {
        testName: "Empty first name",
        first_name: '',
        email: 'test3@gmail',
        last_name: '3_name',
        comment: 'Test text 3'
    }]

export const errors = {
    invalidEmail: "Error: Invalid email address",
    invailAllFields: "Error: all fields are required"
}
