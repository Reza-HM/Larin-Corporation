import { useEffect } from "react";
import Accordion from "../Components/Modules/Accordion";
import BreadCrumb from "../Components/Modules/BreadCrumb";
import SectionHeader from "../Components/Modules/SectionHeader";
import { getQuestionsFromServer } from "../Redux/store/questions";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Redux/store";

const Questions = () => {
  const questions = useSelector(
    (state: RootState) => state.questions.questions
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getQuestionsFromServer("https://larin-corporation.vercel.app/api/questions"));
  }, [dispatch]);

  return (
    <div className="container">
      <BreadCrumb route="سوالات متداول" />
      <SectionHeader englishTitle="Questions" persianTitle="سوالات متداول" />
      <div className="my-32">
        {questions.map((question) => (
          <Accordion {...question} key={question.id} />
        ))}
      </div>
    </div>
  );
};
export default Questions;
