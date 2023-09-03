const storyReducer =(state=[],action)=>{
    switch(action.type){
        case "FETCH_ALL_STORIES":
            return action.payload;
        case "CREATE_STORY":
            // console.log("data",action.payload.image);
            return [...state,action.payload]; 
        case "UPDATE_STORY":
        case "LIKE_STORY":
                // console.log("data",action.payload.image);
            return state.map(story=>story._id===action.payload._id?action.payload:story);  
        case "DELETE_STORY":
                // console.log("data",action.payload.image);
            return state.filter(story=>story._id!==action.payload);
        
        default:
            return state;
    }
};

export default storyReducer;