/**
 * It takes a date in the format of a string, converts it to a date object, then returns a string in
 * the format of "Month Day, Year"
 * @returns A function that takes a date as an argument and returns a formatted date.
 */
export const formatDate = date => {
    const newDate = new Date(date)
    const options = {
        year: 'numeric',
        month: 'long',
        dat: '2-digit'
    }
    return newDate.toLocaleDateString('es-ES', options)
}