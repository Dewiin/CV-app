export function Sidebar({loadSample, clearResume}) {
    return (
        <>
            <button className="clear-button" onClick={clearResume}>Clear Resume</button>
            <button className="load-button" onClick={loadSample}>Load Sample</button>
        </>
    );
}