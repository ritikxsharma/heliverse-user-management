export const setUsers = (users) =>(
    {
        type: 'SET_USERS',
        payload: users
    }
)

export const setSearchQuery = (searchQuery) =>(
    {
        type: 'SET_SEARCH_QUERY',
        payload: searchQuery
    }
)

export const setGenderFilter = (gender) => (
    {
        type: 'SET_GENDER_FILTER',
        payload: gender
    }
)

export const setDomainFilter = (domain) => (
    {
        type: 'SET_DOMAIN_FILTER',
        payload: domain
    }
)

export const setAvailabilityFilter = (availability) => (
    {
        type: 'SET_AVAILABILITY_FILTER',
        payload: availability
    }
)

export const setTotalPages = (totalPages) =>(
    {
        type: 'SET_TOTAL_PAGES',
        payload: totalPages
    }
)

export const setCurrentPage = (pageNumber) =>(
    {
        type: 'SET_CURRENT_PAGE',
        payload: pageNumber
    }
)