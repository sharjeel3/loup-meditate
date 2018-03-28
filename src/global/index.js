export const CONSTANTS = {
    REFRESH_PLANS: 'REFRESH_PLANS'
}

export const ENDPOINTS = {
    activities: '../api/api.json'
}

export const ACTIVITY_CONTENT_TYPES = [
    1,
    5,
    104
]

export const getBackgroundImgStyle = (image) => {
    // TODO: Handle responsive images
    return {
        backgroundImage: 'url(' + image + ')'
    }
}
