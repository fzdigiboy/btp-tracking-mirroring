import { Button } from '@measured/puck'

export interface ButtonProps {
  label: string
  href: string
  variant: 'primary' | 'secondary'
}

export function ButtonComponent({ href, variant, label, puck }: ButtonProps) {
  return (
    <div>
      <Button
        href={puck.isEditing ? '#' : href}
        variant={variant}
        size="large"
        tabIndex={puck.isEditing ? -1 : undefined}
      >
        {label}
      </Button>
    </div>
  )
}
