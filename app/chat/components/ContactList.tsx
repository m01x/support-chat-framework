import { NavLink } from "react-router"
import { ScrollArea } from "~/components/ui/scroll-area"
import { Button } from "~/components/ui/button"

export const ContactList = () => {
  return (
    <ScrollArea className="h-[calc(100vh-120px)]">
          <div className="space-y-4 p-4">
            <div className="space-y-1">
              <h3 className="px-2 text-sm font-semibold">Contacts</h3>
              <div className="space-y-1">
                <NavLink 
                  to="/chat"
                  className="w-full justify-start flex items-center gap-2"
                >
                  <div className="h-6 w-6 rounded-full bg-blue-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
                    G5
                  </div>
                  G5 Customer
                </NavLink>

                <NavLink 
                  to="/chat/ABC"
                  className={({isActive})=> 
                    isActive ? 
                  "w-full justify-start flex items-center gap-2 bg-gray-500 transition-all duration-300 rounded-2xl text-primary-foreground" 
                  : "w-full justify-start flex items-center gap-2"}
                >
                  <div className="h-6 w-6 rounded-full bg-green-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
                    JD
                  </div>
                  John Doe
                </NavLink>

                <Button variant="ghost" className="w-full justify-start">
                  <div className="h-6 w-6 rounded-full bg-purple-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
                    AS
                  </div>
                  Alice Smith
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <div className="h-6 w-6 rounded-full bg-yellow-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
                    RJ
                  </div>
                  Robert Johnson
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <div className="h-6 w-6 rounded-full bg-pink-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
                    EW
                  </div>
                  Emma Wilson
                </Button>
              </div>
            </div>
            <div className="pt-4 border-t mt-4">
              <h3 className="px-2 text-sm font-semibold mb-1">Recent</h3>
              <Button variant="ghost" className="w-full justify-start">
                <div className="h-6 w-6 rounded-full bg-gray-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
                  TM
                </div>
                Thomas Miller
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <div className="h-6 w-6 rounded-full bg-red-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
                  SB
                </div>
                Sarah Brown
              </Button>
            </div>
          </div>
        </ScrollArea>
  )
}
