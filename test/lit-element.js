import { css, html, LitElement } from 'lit';

class TestStylelintElement extends LitElement {
	static properties = {
		status: { type: String }
	};

	static styles = css`
		:host {
			--d2l-status-color: #1b7f3b;

			display: block;
			font-family: Arial, sans-serif;
		}

		.container {
			background-color: #ffffff;
			border: 1px solid #d9dce1;
			border-radius: 0.375rem;
			color: #202124;
			padding: 1rem;
		}

		.label {
			font-size: 0.875rem;
			margin: 0;
			text-transform: uppercase;
		}

		.value {
			color: var(--d2l-status-color);
			font-size: 1.125rem;
			font-weight: 700;
			margin: 0.25rem 0 0;
		}

		.value::before {
			content: "●";
			margin-right: 0.25rem;
		}
	`;

	constructor() {
		super();
		this.status = 'Active';
	}

	render() {
		return html`
			<section class="container">
				<p class="label">Current status</p>
				<p class="value">${this.status}</p>
			</section>
		`;
	}
}

customElements.define('test-stylelint-element', TestStylelintElement);