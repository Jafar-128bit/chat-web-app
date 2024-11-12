export const formatTimeDifference = (timestamp: string): string => {
    const givenTime = new Date(timestamp);
    const currentTime = new Date();
    const diffInMs = currentTime.getTime() - givenTime.getTime();
    const diffInSeconds = Math.floor(diffInMs / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInSeconds < 60) return `${diffInSeconds}s`;
    if (diffInMinutes < 60) return `${diffInMinutes}m`;
    if (diffInHours < 24) return diffInHours === 1 ? '1hr' : `${diffInHours}hr`;
    if (diffInDays === 1) return 'yesterday';

    const day = givenTime.getDate().toString().padStart(2, '0');
    const month = (givenTime.getMonth() + 1).toString().padStart(2, '0');
    const year = givenTime.getFullYear().toString().slice(2);

    return `${day}-${month}-${year}`;
}