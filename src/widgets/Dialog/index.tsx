import * as RadixDialog from '@radix-ui/react-dialog';
import { DialogContent } from './styles';
import { ReactNode } from 'react';

type DialogProps = {
    open: boolean,
    setOpen: (open: boolean) => void
    content: ReactNode
}

export function Dialog({
    open,
    setOpen,
    content
}: DialogProps) {
    return (
        <RadixDialog.Root open={open} onOpenChange={setOpen}>
            <RadixDialog.Portal>
                <DialogContent>
                    {content}
                </DialogContent>
            </RadixDialog.Portal>
        </RadixDialog.Root >
    )
}