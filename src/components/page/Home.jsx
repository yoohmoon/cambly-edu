import Header from "../common/Header";
import CurriSection from "../home/CurriSection";
import FooterSection from "../home/FooterSection";
import MainSection from "../home/MainSection";
import ReviewSection from "../home/ReviewSection";
import TutorSection from "../home/TutorSection";

function Home() {
  /*  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false);

  // 모달창 노출하는 함수
  const showModal = () => {
    setModalOpen(true);
  }; */

  return (
    <div>
      <Header />
      <MainSection />
      <TutorSection />
      <CurriSection />
      <ReviewSection />
      <FooterSection />
    </div>
  );
}

export default Home;
