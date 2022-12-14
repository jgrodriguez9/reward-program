function Message({message}) {

    const reload = () => {
        window.location.reload();
    }

    return (
        <div className="view-1">
            <div className="error-message">
                {message}
            </div>
            <div className="mt-2 d-grid">
                <button 
                    className="btn-1" 
                    onClick={reload} 
                    data-testid="btn-send-request"
                >
                    Reload
                </button>
            </div>
            
        </div>
        
    )
}

export  { Message }