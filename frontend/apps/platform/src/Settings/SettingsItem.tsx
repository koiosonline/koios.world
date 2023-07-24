import { Toggle } from '@frontend/jsx-core';

export enum SettingsItemActionType {
  Toggle = 'Toggle',
  Button = 'Button',
  Select = 'Select'
}

type SettingsItemType = {
  title: string;
  description: string;
  action: (e?: any) => void;
  actionType?: SettingsItemActionType;
  actionLabel?: string;
  showBorder?: boolean;
  checked?: boolean;
  selectOptions?: { value: string; label: string }[];
  defaultValue?: string;
};

export const SettingsItem = (props: SettingsItemType) => {
  const { title, description, action, actionType = 'Toggle', actionLabel, showBorder = true, checked, selectOptions, defaultValue } = props;

  return (
    <div className={`flex items-center justify-between gap-10 py-6 ${showBorder ? 'border-t' : ''} border-slate-200 py-2`}>
      <div>
        <h1 className="h6 mb-2 text-primary-dark">{title}</h1>
        <p className="text-sm">{description}</p>
      </div>

      {actionType === SettingsItemActionType.Toggle && <Toggle onToggle={() => action()} checked={checked} />}
      {actionType === SettingsItemActionType.Button && <button onClick={() => action()}>{actionLabel}</button>}
      {actionType === SettingsItemActionType.Select && (
        <select onChange={(e) => action(e)} value={defaultValue}>
          {selectOptions?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};
