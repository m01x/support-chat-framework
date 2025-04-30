import { useNavigate } from "react-router";
import { Button } from "~/components/ui/button"

const TestingPage = () => {

  const navigate = useNavigate();

  return (
    <>
      <p>
        testing page
        </p>
      <Button className="mt-2" onClick={() => navigate('/auth/login')}>Go to login</Button>
    </>
  )
}

export default TestingPage
