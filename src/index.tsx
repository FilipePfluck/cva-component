import { ComponentProps, ReactHTML, createElement } from 'react'
import { cva } from 'class-variance-authority'

interface Variants {
  [k: string]: {
    [k: string]: string | string[]
  }
}

type VariantsToValues<T extends Variants> = {
  [K in keyof T]: keyof T[K]
}

type ComponentPropsWithVariants<
  V extends Variants,
  E extends keyof ReactHTML
> = {
  variants?: Partial<VariantsToValues<V>>
} & ComponentProps<E>

interface CVA<V extends Variants> {
  base?: string | string[]
  variants?: V
  defaultVariants?: Partial<VariantsToValues<V>>
}

export const CVAComponent = <E extends keyof ReactHTML, V extends Variants>(
  element: E,
  cvaObject: CVA<V>,
  displayName?: string
) => {
  const {
    base = '',
    variants: requestVariants,
    defaultVariants = {}
  } = cvaObject

  const _variants = requestVariants ?? {}

  const createClassname = cva(base, { variants: _variants })

  const Component = ({
    children,
    className,
    variants,
    ...props
  }: ComponentPropsWithVariants<NonNullable<typeof requestVariants>, E>) => {
    const mergedVariants = { ...defaultVariants, ...variants }
    const cvaClassName = createClassname({ className, ...mergedVariants })

    return createElement(
      element,
      { className: cvaClassName, ...props },
      children
    )
  }

  Component.displayName = displayName

  return Component
}

export const selector = (selector: string, classes: string) => {
  const classesArray = classes.split(' ')
  const classesWithSelector = classesArray
    .map((className) => {
      return selector + className
    })
    .join(' ')

  return classesWithSelector
}

export const hover = (classes: string) => {
  const classesArray = classes.split(' ')
  const classesWithSelector = classesArray
    .map((className) => {
      return 'hover:' + className
    })
    .join(' ')

  return classesWithSelector
}

export const focus = (classes: string) => {
  const classesArray = classes.split(' ')
  const classesWithSelector = classesArray
    .map((className) => {
      return 'focus:' + className
    })
    .join(' ')

  return classesWithSelector
}

export const focusWithin = (classes: string) => {
  const classesArray = classes.split(' ')
  const classesWithSelector = classesArray
    .map((className) => {
      return 'focus-within:' + className
    })
    .join(' ')

  return classesWithSelector
}

export const focusVisible = (classes: string) => {
  const classesArray = classes.split(' ')
  const classesWithSelector = classesArray
    .map((className) => {
      return 'focus-visible:' + className
    })
    .join(' ')

  return classesWithSelector
}

export const active = (classes: string) => {
  const classesArray = classes.split(' ')
  const classesWithSelector = classesArray
    .map((className) => {
      return 'active:' + className
    })
    .join(' ')

  return classesWithSelector
}

export const first = (classes: string) => {
  const classesArray = classes.split(' ')
  const classesWithSelector = classesArray
    .map((className) => {
      return 'first:' + className
    })
    .join(' ')

  return classesWithSelector
}

export const last = (classes: string) => {
  const classesArray = classes.split(' ')
  const classesWithSelector = classesArray
    .map((className) => {
      return 'last:' + className
    })
    .join(' ')

  return classesWithSelector
}

export const only = (classes: string) => {
  const classesArray = classes.split(' ')
  const classesWithSelector = classesArray
    .map((className) => {
      return 'only:' + className
    })
    .join(' ')

  return classesWithSelector
}

export const odd = (classes: string) => {
  const classesArray = classes.split(' ')
  const classesWithSelector = classesArray
    .map((className) => {
      return 'odd:' + className
    })
    .join(' ')

  return classesWithSelector
}

export const even = (classes: string) => {
  const classesArray = classes.split(' ')
  const classesWithSelector = classesArray
    .map((className) => {
      return 'even:' + className
    })
    .join(' ')

  return classesWithSelector
}

export const disabled = (classes: string) => {
  const classesArray = classes.split(' ')
  const classesWithSelector = classesArray
    .map((className) => {
      return 'disabled:' + className
    })
    .join(' ')

  return classesWithSelector
}

export const enabled = (classes: string) => {
  const classesArray = classes.split(' ')
  const classesWithSelector = classesArray
    .map((className) => {
      return 'enabled:' + className
    })
    .join(' ')

  return classesWithSelector
}

export const required = (classes: string) => {
  const classesArray = classes.split(' ')
  const classesWithSelector = classesArray
    .map((className) => {
      return 'required:' + className
    })
    .join(' ')

  return classesWithSelector
}

export const valid = (classes: string) => {
  const classesArray = classes.split(' ')
  const classesWithSelector = classesArray
    .map((className) => {
      return 'valid:' + className
    })
    .join(' ')

  return classesWithSelector
}

export const invalid = (classes: string) => {
  const classesArray = classes.split(' ')
  const classesWithSelector = classesArray
    .map((className) => {
      return 'invalid:' + className
    })
    .join(' ')

  return classesWithSelector
}

export const autofill = (classes: string) => {
  const classesArray = classes.split(' ')
  const classesWithSelector = classesArray
    .map((className) => {
      return 'autofill:' + className
    })
    .join(' ')

  return classesWithSelector
}

export const before = (classes: string) => {
  const classesArray = classes.split(' ')
  const classesWithSelector = classesArray
    .map((className) => {
      return 'before:' + className
    })
    .join(' ')

  return classesWithSelector
}

export const after = (classes: string) => {
  const classesArray = classes.split(' ')
  const classesWithSelector = classesArray
    .map((className) => {
      return 'after:' + className
    })
    .join(' ')

  return classesWithSelector
}

export const placeholder = (classes: string) => {
  const classesArray = classes.split(' ')
  const classesWithSelector = classesArray
    .map((className) => {
      return 'placeholder:' + className
    })
    .join(' ')

  return classesWithSelector
}

export const dark = (classes: string) => {
  const classesArray = classes.split(' ')
  const classesWithSelector = classesArray
    .map((className) => {
      return 'dark:' + className
    })
    .join(' ')

  return classesWithSelector
}
