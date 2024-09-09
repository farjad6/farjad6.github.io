import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export function calculateYearsOfExperience() {
    const today = new Date();
    const start = new Date(process.env.NEXT_PUBLIC_AUTHOR_WORK_START);

    let yearsDifference = today.getFullYear() - start.getFullYear();
    const monthDifference = today.getMonth() - start.getMonth();
    const dayDifference = today.getDate() - start.getDate();

    // If the current month is earlier than the start month or it's the same month but the day hasn't passed yet, subtract one year
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        yearsDifference--;
    }

    return yearsDifference;
}