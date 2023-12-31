import clsx from 'clsx';
import { LogoSvg } from './LogoSvg';


export function Logo({ className }: { className?: string }) {
    return (
        <div
            className={clsx(
                'flex items-center justify-center gap-2 text-2xl font-semibold text-black font-lato',
                
            )}>
            <div className="w-[60px]">
                <div dangerouslySetInnerHTML={{__html: LogoSvg}}></div>
            </div>
            
        </div>
    );
}
