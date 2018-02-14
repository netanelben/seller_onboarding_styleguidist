import React from 'react';
import './style.scss';

function SectionAside({ title, subtitle = null, tooltip }) {
    return (
        <aside>
            <h3>{title}</h3>
            {subtitle && <span>{subtitle}</span>}
            {tooltip && <small>{tooltip}</small>}
        </aside>
    );
}

export default function Section() {
    return (
        <section className="section-wrapper">
            <SectionAside title="Your Occupation" subtitle="Fill what you do at work" tooltip="I Am A Tooltip"/>
            <div>Section Content</div>
        </section>
    );
}