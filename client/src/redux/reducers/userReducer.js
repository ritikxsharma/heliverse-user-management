const initialState = {
    loading: false,
    users: [],
    searchQuery: '',
    genderFilter: 'All',
    domainFilter: 'All',
    availabilityFilter: 'All',
    usersPerPage: 12,
    totalPages: null,
    currentPage: 1
}

const userReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'SET_LOADING':
            return{
                ...state,
                loading: action.payload
            }
        case 'SET_USERS':
            return{
                ...state,
                users: action.payload
            }
        case 'SET_SEARCH_QUERY':
            return{
                ...state,
                searchQuery: action.payload
            }
        case 'SET_GENDER_FILTER':
            return{
                ...state,
                genderFilter: action.payload
            }
        case 'SET_DOMAIN_FILTER':
            return{
                ...state,
                domainFilter: action.payload
            }
        case 'SET_AVAILABILITY_FILTER':
            return{
                ...state,
                availabilityFilter: action.payload
            }
        case 'SET_TOTAL_PAGES':
            return{
                ...state,
                totalPages: action.payload
            }
        case 'SET_CURRENT_PAGE':
            return{
                ...state,
                currentPage: action.payload
            }
        default:
            return state
    }
}

export default userReducer