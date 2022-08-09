import { LitLogo } from '@websaam/ui';

const Header = ({title}) => {
    return (
        <>
            <div>
                <LitLogo
                cursorPointer={true}
                onClick={() => {console.log();}}
                title="Lit Protocol"
                subtitle="x IPFS Example"
                />
            </div>

            <h1>
                { title }
            </h1>
        </>
    );
}

export default Header;
