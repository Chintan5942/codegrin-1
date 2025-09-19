import PageTitle from "../../components/PageTitle";
import { COURSES } from "../../constants/CoursesConstants";
export default function Courses() {


  return (
    <section className="w-full min-h-screen">
      <div className="container">
        <PageTitle
          title="Our Courses"
        />
        {COURSES.length}
       
      </div>
    </section>
  );
}
