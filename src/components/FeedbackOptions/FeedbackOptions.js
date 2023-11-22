import { OptionList } from './FeedbackOptionsStyled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <OptionList>
    {options.map(({ name, value }) => (
      <li key={name}>
        <button value={value} onClick={() => onLeaveFeedback(name)}>
          {name}
        </button>
      </li>
    ))}
  </OptionList>
);

