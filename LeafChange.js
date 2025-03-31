// Function to determine leaf color based on the season
function getLeafColor(season) {
    switch (season.toLowerCase()) {
        case 'spring':
            return 'Light Green';
        case 'summer':
            return 'Dark Green';
        case 'autumn':
        case 'fall':
            return 'Orange, Yellow, or Red';
        case 'winter':
            return 'Brown or Bare';
        default:
            return 'Unknown season';
    }
}

// Example usage
const season = 'autumn';
console.log(`In ${season}, the leaf color is: ${getLeafColor(season)}`);