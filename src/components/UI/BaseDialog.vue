<template>
    <dialog open>
        <header>
            <slot name="header">
                <h2>Dialog header</h2>
            </slot>
        </header>

        <main>
            <slot>
                <blockquote>Dialoge message</blockquote>
            </slot>
        </main>

        <footer>
            <slot name="footer">
                Dialog footer if necessary
            </slot>
        </footer>
    </dialog>
</template>