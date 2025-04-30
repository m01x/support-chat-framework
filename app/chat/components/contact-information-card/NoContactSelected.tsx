
export const NoContactSelected = () => {
  return (
        <div className="flex flex-col items-center justify-center h-full p-6 text-center">
          <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <h3 className="font-semibold text-lg mb-2">No Contact Selected</h3>
          <p className="text-sm text-muted-foreground mb-4">Please select a contact to view their information and continue.</p>
        </div>
  )
}
