'use client'

import {useTransition} from 'react';
import {useParams} from 'next/navigation';
import {Locale} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/navigation';



export function LanguageDrawer() {

    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const params = useParams();

    function onSelectChange(locale: Locale) {
        startTransition(() => {
        router.replace(
            // @ts-expect-error -- TypeScript will validate that only known `params`
            // are used in combination with a given `pathname`. Since the two will
            // always match for the current route, we can skip runtime checks.
            {pathname, params},
            {locale: locale}
        );
        });
    }

    return (
        <div className="links-box">
            <button onClick={() => onSelectChange('zh')}>
                中文
            </button>
            <button onClick={() => onSelectChange('en')}>
                English
            </button>
        </div>
    )

}
