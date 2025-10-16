import { useState } from 'react'
import { Faq } from '../../shared/Faq/Faq'
import { Label } from '../../shared/Label/Label'
import styles from './faqs.module.css'

export const FAQS = () => {
  const [ toggle, setToggle ] = useState(null)

  return (
    <div id='faqSection' className={styles.container}>
      <Label children={'FAQ'}/>
      <h4 className="subtitle">All You Need to know</h4>
      <div className={styles.questions}>
        {
          questions.map((question) => (
            <Faq key={question.id} question={question} setToggle={setToggle} toggle={toggle}/>
          ))
        }
      </div>
    </div>
  )
}

const questions = [
  {
    id: 1,
    question: 'How long does setup take?',
    answer: "Setup takes just a few minutes-connect your accounts and you're ready to go."
  },
  {
    id: 2,
    question: 'Is my financial data secure?',
    answer: "Absolutely. We use bank-level encryption and follow strict security protocols to keep your data safe."
  },
  {
    id: 3,
    question: 'Can I use this app with my team?',
    answer: "Yes! You can invite team members and assign roles for easy collaboration."
  },
  {
    id: 4,
    question: 'What if I need to change my plan?',
    answer: "You can upgrade, downgrade, or cancel your plan anytime&mdash;no hideden fees.."
  },
  {
    id: 5,
    question: 'Do you offer costumer support?',
    answer: "Yes, we offer email support for all plans and priority support on Growth and Scale tiers."
  },
]