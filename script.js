// Function to show profile preview
function showProfile(platform) {
    const profilePreview = document.getElementById('profile-preview');

    // Add dynamic content for each platform
    let profileContent = '';
    switch (platform) {
        case 'facebook':
            profileContent = 'Facebook Profile: Stay connected with updates!';
            break;
        case 'twitter':
            profileContent = 'Twitter Profile: See my latest tweets and thoughts!';
            break;
        case 'instagram':
            profileContent = 'Instagram Profile: Explore my visual world!';
            break;
        case 'linkedin':
            profileContent = 'LinkedIn Profile: Connect professionally!';
            break;
        default:
            profileContent = '';
    }

    // Show profile preview
    profilePreview.textContent = profileContent;
    profilePreview.style.display = 'block';
}

// Function to hide profile preview
function hideProfile() {
    const profilePreview = document.getElementById('profile-preview');
    profilePreview.style.display = 'none';
}
