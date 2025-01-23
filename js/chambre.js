const chambres = [
  {
    image: "images/chambres/photo-chambre.jpg",
    titre: "Chambre avec lit simple",
    prix: "145.000 FCFA",
    disponibilite: "oui",
    emoticons: [
      `<svg
								class="mb-2"
								width="28"
								height="32"
								viewBox="0 0 28 32"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<ellipse
									cx="13.8333"
									cy="16"
									rx="13.3333"
									ry="16"
									fill="#F2F2F2" />
								<path
									d="M11.4803 23V22.1176H12.2156V21.2353H8.53913C7.9541 21.2353 7.39302 20.9564 6.97934 20.46C6.56566 19.9636 6.33325 19.2903 6.33325 18.5882V10.6471C6.33325 9.94502 6.56566 9.27173 6.97934 8.77531C7.39302 8.27889 7.9541 8 8.53913 8H19.5685C20.1536 8 20.7147 8.27889 21.1283 8.77531C21.542 9.27173 21.7744 9.94502 21.7744 10.6471V18.5882C21.7744 19.2903 21.542 19.9636 21.1283 20.46C20.7147 20.9564 20.1536 21.2353 19.5685 21.2353H15.8921V22.1176H16.6274V23H11.4803ZM12.9509 21.2353V22.1176H15.1568V21.2353H12.9509ZM8.53913 8.88235C8.14911 8.88235 7.77506 9.06828 7.49927 9.39922C7.22348 9.73017 7.06855 10.179 7.06855 10.6471V18.5882C7.06855 19.0563 7.22348 19.5051 7.49927 19.8361C7.77506 20.167 8.14911 20.3529 8.53913 20.3529H19.5685C19.9586 20.3529 20.3326 20.167 20.6084 19.8361C20.8842 19.5051 21.0391 19.0563 21.0391 18.5882V10.6471C21.0391 10.179 20.8842 9.73017 20.6084 9.39922C20.3326 9.06828 19.9586 8.88235 19.5685 8.88235H8.53913Z"
									fill="#7C6A46" />
							</svg>
							<svg
								class="mb-2"
								width="28"
								height="32"
								viewBox="0 0 28 32"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<ellipse cx="14" cy="16" rx="13.3333" ry="16" fill="#F2F2F2" />
								<path
									d="M9.38461 22.4231C9.38461 22.5372 9.35641 22.6487 9.30359 22.7436C9.25076 22.8385 9.17567 22.9124 9.08782 22.9561C8.99997 22.9997 8.90331 23.0112 8.81005 22.9889C8.71679 22.9667 8.63112 22.9117 8.56389 22.831C8.49665 22.7503 8.45086 22.6475 8.43231 22.5356C8.41376 22.4237 8.42328 22.3077 8.45967 22.2023C8.49606 22.0969 8.55768 22.0068 8.63674 21.9434C8.7158 21.88 8.80875 21.8462 8.90384 21.8462C9.03135 21.8462 9.15363 21.9069 9.2438 22.0151C9.33396 22.1233 9.38461 22.2701 9.38461 22.4231ZM10.8269 19.5385C10.7318 19.5385 10.6389 19.5723 10.5598 19.6357C10.4808 19.6991 10.4191 19.7892 10.3827 19.8946C10.3464 20 10.3368 20.116 10.3554 20.2279C10.3739 20.3399 10.4197 20.4427 10.487 20.5233C10.5542 20.604 10.6399 20.659 10.7331 20.6812C10.8264 20.7035 10.923 20.6921 11.0109 20.6484C11.0987 20.6047 11.1738 20.5308 11.2267 20.4359C11.2795 20.341 11.3077 20.2295 11.3077 20.1154C11.3077 19.9624 11.257 19.8156 11.1669 19.7074C11.0767 19.5992 10.9544 19.5385 10.8269 19.5385ZM6.98077 19.5385C6.88568 19.5385 6.79273 19.5723 6.71367 19.6357C6.63461 19.6991 6.57298 19.7892 6.5366 19.8946C6.50021 20 6.49069 20.116 6.50924 20.2279C6.52779 20.3399 6.57358 20.4427 6.64081 20.5233C6.70805 20.604 6.79372 20.659 6.88698 20.6812C6.98024 20.7035 7.0769 20.6921 7.16475 20.6484C7.2526 20.6047 7.32769 20.5308 7.38051 20.4359C7.43334 20.341 7.46154 20.2295 7.46154 20.1154C7.46154 19.9624 7.41088 19.8156 7.32072 19.7074C7.23056 19.5992 7.10828 19.5385 6.98077 19.5385ZM8.90384 17.2308C8.80875 17.2308 8.7158 17.2646 8.63674 17.328C8.55768 17.3914 8.49606 17.4815 8.45967 17.5869C8.42328 17.6923 8.41376 17.8083 8.43231 17.9203C8.45086 18.0322 8.49665 18.135 8.56389 18.2156C8.63112 18.2963 8.71679 18.3513 8.81005 18.3735C8.90331 18.3958 8.99997 18.3844 9.08782 18.3407C9.17567 18.297 9.25076 18.2231 9.30359 18.1282C9.35641 18.0333 9.38461 17.9218 9.38461 17.8077C9.38461 17.6547 9.33396 17.5079 9.2438 17.3998C9.15363 17.2916 9.03135 17.2308 8.90384 17.2308ZM20.923 8.28849C20.923 8.36499 20.8977 8.43837 20.8526 8.49246C20.8076 8.54656 20.7464 8.57695 20.6827 8.57695H18.9585C18.8949 8.57708 18.834 8.60742 18.789 8.66133L17.0607 10.7354L15.7464 19.9712C15.7245 20.1278 15.6671 20.2741 15.5805 20.3942C15.4939 20.5143 15.3814 20.6034 15.2554 20.6519C15.1837 20.6791 15.1089 20.6927 15.0336 20.6923C14.8429 20.6917 14.66 20.6004 14.5252 20.4385L8.63581 13.3712C8.54186 13.259 8.47547 13.118 8.44393 12.9635C8.41239 12.8091 8.41693 12.6472 8.45704 12.4956C8.49716 12.3441 8.57129 12.2087 8.67131 12.1044C8.77134 12.0001 8.89338 11.9309 9.02403 11.9043L16.7163 10.3272L18.4447 8.25315C18.512 8.17207 18.5921 8.10792 18.6803 8.06446C18.7686 8.02099 18.8631 7.99909 18.9585 8.00003H20.6827C20.7464 8.00003 20.8076 8.03042 20.8526 8.08452C20.8977 8.13861 20.923 8.21199 20.923 8.28849ZM16.5426 10.9488L9.10637 12.4712C9.06263 12.4796 9.02169 12.5024 8.98807 12.537C8.95445 12.5716 8.92945 12.6167 8.91584 12.6673C8.90222 12.7179 8.90052 12.772 8.91092 12.8237C8.92131 12.8753 8.94341 12.9226 8.97476 12.9601L14.8642 20.0274C14.8954 20.065 14.9346 20.0915 14.9776 20.1041C15.0206 20.1166 15.0656 20.1147 15.1077 20.0985C15.1499 20.0824 15.1874 20.0526 15.2164 20.0124C15.2453 19.9722 15.2644 19.9233 15.2716 19.8709L16.5426 10.9488Z"
									fill="#7C6A46" />
							</svg>
							<svg
								class="mb-2"
								width="28"
								height="32"
								viewBox="0 0 28 32"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<ellipse
									cx="14.1666"
									cy="16"
									rx="13.3333"
									ry="16"
									fill="#F2F2F2" />
								<path
									d="M16.9597 17.4951C16.2814 16.8154 15.4264 16.4418 14.5427 16.4389C13.659 16.4359 12.8023 16.8039 12.1209 17.4791V17.4951M19.2694 14.3444C17.9354 13.0238 16.26 12.3016 14.5307 12.3016C12.8014 12.3016 11.126 13.0238 9.79207 14.3444M21.5463 11.0373C19.5715 9.07422 17.0876 8 14.5232 8C11.9588 8 9.47484 9.07422 7.5 11.0373M14.5307 19.3557C14.2304 19.3557 13.9368 19.4626 13.6871 19.6628C13.4374 19.863 13.2428 20.1476 13.1279 20.4806C13.0129 20.8135 12.9829 21.1799 13.0415 21.5333C13.1001 21.8868 13.2447 22.2115 13.457 22.4663C13.6694 22.7211 13.9399 22.8947 14.2345 22.965C14.529 23.0353 14.8344 22.9992 15.1118 22.8613C15.3893 22.7234 15.6264 22.4898 15.7933 22.1902C15.9601 21.8905 16.0492 21.5382 16.0492 21.1779C16.0492 20.9386 16.0099 20.7016 15.9336 20.4806C15.8573 20.2595 15.7454 20.0586 15.6044 19.8894C15.4634 19.7202 15.296 19.586 15.1118 19.4944C14.9276 19.4029 14.7301 19.3557 14.5307 19.3557Z"
									stroke="#7C6A46"
									stroke-linecap="round"
									stroke-linejoin="round" />
							</svg>`
    ]
  },
  {
    image: "images/chambres/photo-chambre.jpg",
    titre: "Chambre avec lit simple",
    prix: "145.000 FCFA",
    disponibilite: "oui",
    emoticons: [
      `<svg
								class="mb-2"
								width="28"
								height="32"
								viewBox="0 0 28 32"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<ellipse
									cx="13.8333"
									cy="16"
									rx="13.3333"
									ry="16"
									fill="#F2F2F2" />
								<path
									d="M11.4803 23V22.1176H12.2156V21.2353H8.53913C7.9541 21.2353 7.39302 20.9564 6.97934 20.46C6.56566 19.9636 6.33325 19.2903 6.33325 18.5882V10.6471C6.33325 9.94502 6.56566 9.27173 6.97934 8.77531C7.39302 8.27889 7.9541 8 8.53913 8H19.5685C20.1536 8 20.7147 8.27889 21.1283 8.77531C21.542 9.27173 21.7744 9.94502 21.7744 10.6471V18.5882C21.7744 19.2903 21.542 19.9636 21.1283 20.46C20.7147 20.9564 20.1536 21.2353 19.5685 21.2353H15.8921V22.1176H16.6274V23H11.4803ZM12.9509 21.2353V22.1176H15.1568V21.2353H12.9509ZM8.53913 8.88235C8.14911 8.88235 7.77506 9.06828 7.49927 9.39922C7.22348 9.73017 7.06855 10.179 7.06855 10.6471V18.5882C7.06855 19.0563 7.22348 19.5051 7.49927 19.8361C7.77506 20.167 8.14911 20.3529 8.53913 20.3529H19.5685C19.9586 20.3529 20.3326 20.167 20.6084 19.8361C20.8842 19.5051 21.0391 19.0563 21.0391 18.5882V10.6471C21.0391 10.179 20.8842 9.73017 20.6084 9.39922C20.3326 9.06828 19.9586 8.88235 19.5685 8.88235H8.53913Z"
									fill="#7C6A46" />
							</svg>
							<svg
								class="mb-2"
								width="28"
								height="32"
								viewBox="0 0 28 32"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<ellipse cx="14" cy="16" rx="13.3333" ry="16" fill="#F2F2F2" />
								<path
									d="M9.38461 22.4231C9.38461 22.5372 9.35641 22.6487 9.30359 22.7436C9.25076 22.8385 9.17567 22.9124 9.08782 22.9561C8.99997 22.9997 8.90331 23.0112 8.81005 22.9889C8.71679 22.9667 8.63112 22.9117 8.56389 22.831C8.49665 22.7503 8.45086 22.6475 8.43231 22.5356C8.41376 22.4237 8.42328 22.3077 8.45967 22.2023C8.49606 22.0969 8.55768 22.0068 8.63674 21.9434C8.7158 21.88 8.80875 21.8462 8.90384 21.8462C9.03135 21.8462 9.15363 21.9069 9.2438 22.0151C9.33396 22.1233 9.38461 22.2701 9.38461 22.4231ZM10.8269 19.5385C10.7318 19.5385 10.6389 19.5723 10.5598 19.6357C10.4808 19.6991 10.4191 19.7892 10.3827 19.8946C10.3464 20 10.3368 20.116 10.3554 20.2279C10.3739 20.3399 10.4197 20.4427 10.487 20.5233C10.5542 20.604 10.6399 20.659 10.7331 20.6812C10.8264 20.7035 10.923 20.6921 11.0109 20.6484C11.0987 20.6047 11.1738 20.5308 11.2267 20.4359C11.2795 20.341 11.3077 20.2295 11.3077 20.1154C11.3077 19.9624 11.257 19.8156 11.1669 19.7074C11.0767 19.5992 10.9544 19.5385 10.8269 19.5385ZM6.98077 19.5385C6.88568 19.5385 6.79273 19.5723 6.71367 19.6357C6.63461 19.6991 6.57298 19.7892 6.5366 19.8946C6.50021 20 6.49069 20.116 6.50924 20.2279C6.52779 20.3399 6.57358 20.4427 6.64081 20.5233C6.70805 20.604 6.79372 20.659 6.88698 20.6812C6.98024 20.7035 7.0769 20.6921 7.16475 20.6484C7.2526 20.6047 7.32769 20.5308 7.38051 20.4359C7.43334 20.341 7.46154 20.2295 7.46154 20.1154C7.46154 19.9624 7.41088 19.8156 7.32072 19.7074C7.23056 19.5992 7.10828 19.5385 6.98077 19.5385ZM8.90384 17.2308C8.80875 17.2308 8.7158 17.2646 8.63674 17.328C8.55768 17.3914 8.49606 17.4815 8.45967 17.5869C8.42328 17.6923 8.41376 17.8083 8.43231 17.9203C8.45086 18.0322 8.49665 18.135 8.56389 18.2156C8.63112 18.2963 8.71679 18.3513 8.81005 18.3735C8.90331 18.3958 8.99997 18.3844 9.08782 18.3407C9.17567 18.297 9.25076 18.2231 9.30359 18.1282C9.35641 18.0333 9.38461 17.9218 9.38461 17.8077C9.38461 17.6547 9.33396 17.5079 9.2438 17.3998C9.15363 17.2916 9.03135 17.2308 8.90384 17.2308ZM20.923 8.28849C20.923 8.36499 20.8977 8.43837 20.8526 8.49246C20.8076 8.54656 20.7464 8.57695 20.6827 8.57695H18.9585C18.8949 8.57708 18.834 8.60742 18.789 8.66133L17.0607 10.7354L15.7464 19.9712C15.7245 20.1278 15.6671 20.2741 15.5805 20.3942C15.4939 20.5143 15.3814 20.6034 15.2554 20.6519C15.1837 20.6791 15.1089 20.6927 15.0336 20.6923C14.8429 20.6917 14.66 20.6004 14.5252 20.4385L8.63581 13.3712C8.54186 13.259 8.47547 13.118 8.44393 12.9635C8.41239 12.8091 8.41693 12.6472 8.45704 12.4956C8.49716 12.3441 8.57129 12.2087 8.67131 12.1044C8.77134 12.0001 8.89338 11.9309 9.02403 11.9043L16.7163 10.3272L18.4447 8.25315C18.512 8.17207 18.5921 8.10792 18.6803 8.06446C18.7686 8.02099 18.8631 7.99909 18.9585 8.00003H20.6827C20.7464 8.00003 20.8076 8.03042 20.8526 8.08452C20.8977 8.13861 20.923 8.21199 20.923 8.28849ZM16.5426 10.9488L9.10637 12.4712C9.06263 12.4796 9.02169 12.5024 8.98807 12.537C8.95445 12.5716 8.92945 12.6167 8.91584 12.6673C8.90222 12.7179 8.90052 12.772 8.91092 12.8237C8.92131 12.8753 8.94341 12.9226 8.97476 12.9601L14.8642 20.0274C14.8954 20.065 14.9346 20.0915 14.9776 20.1041C15.0206 20.1166 15.0656 20.1147 15.1077 20.0985C15.1499 20.0824 15.1874 20.0526 15.2164 20.0124C15.2453 19.9722 15.2644 19.9233 15.2716 19.8709L16.5426 10.9488Z"
									fill="#7C6A46" />
							</svg>
							<svg
								class="mb-2"
								width="28"
								height="32"
								viewBox="0 0 28 32"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<ellipse
									cx="14.1666"
									cy="16"
									rx="13.3333"
									ry="16"
									fill="#F2F2F2" />
								<path
									d="M16.9597 17.4951C16.2814 16.8154 15.4264 16.4418 14.5427 16.4389C13.659 16.4359 12.8023 16.8039 12.1209 17.4791V17.4951M19.2694 14.3444C17.9354 13.0238 16.26 12.3016 14.5307 12.3016C12.8014 12.3016 11.126 13.0238 9.79207 14.3444M21.5463 11.0373C19.5715 9.07422 17.0876 8 14.5232 8C11.9588 8 9.47484 9.07422 7.5 11.0373M14.5307 19.3557C14.2304 19.3557 13.9368 19.4626 13.6871 19.6628C13.4374 19.863 13.2428 20.1476 13.1279 20.4806C13.0129 20.8135 12.9829 21.1799 13.0415 21.5333C13.1001 21.8868 13.2447 22.2115 13.457 22.4663C13.6694 22.7211 13.9399 22.8947 14.2345 22.965C14.529 23.0353 14.8344 22.9992 15.1118 22.8613C15.3893 22.7234 15.6264 22.4898 15.7933 22.1902C15.9601 21.8905 16.0492 21.5382 16.0492 21.1779C16.0492 20.9386 16.0099 20.7016 15.9336 20.4806C15.8573 20.2595 15.7454 20.0586 15.6044 19.8894C15.4634 19.7202 15.296 19.586 15.1118 19.4944C14.9276 19.4029 14.7301 19.3557 14.5307 19.3557Z"
									stroke="#7C6A46"
									stroke-linecap="round"
									stroke-linejoin="round" />
							</svg>`
    ]
  },
  
  {
    image: "images/chambres/photo-chambre.jpg",
    titre: "Chambre avec lit simple",
    prix: "145.000 FCFA",
    disponibilite: "oui",
    emoticons: [
      `<svg
								class="mb-2"
								width="28"
								height="32"
								viewBox="0 0 28 32"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<ellipse
									cx="13.8333"
									cy="16"
									rx="13.3333"
									ry="16"
									fill="#F2F2F2" />
								<path
									d="M11.4803 23V22.1176H12.2156V21.2353H8.53913C7.9541 21.2353 7.39302 20.9564 6.97934 20.46C6.56566 19.9636 6.33325 19.2903 6.33325 18.5882V10.6471C6.33325 9.94502 6.56566 9.27173 6.97934 8.77531C7.39302 8.27889 7.9541 8 8.53913 8H19.5685C20.1536 8 20.7147 8.27889 21.1283 8.77531C21.542 9.27173 21.7744 9.94502 21.7744 10.6471V18.5882C21.7744 19.2903 21.542 19.9636 21.1283 20.46C20.7147 20.9564 20.1536 21.2353 19.5685 21.2353H15.8921V22.1176H16.6274V23H11.4803ZM12.9509 21.2353V22.1176H15.1568V21.2353H12.9509ZM8.53913 8.88235C8.14911 8.88235 7.77506 9.06828 7.49927 9.39922C7.22348 9.73017 7.06855 10.179 7.06855 10.6471V18.5882C7.06855 19.0563 7.22348 19.5051 7.49927 19.8361C7.77506 20.167 8.14911 20.3529 8.53913 20.3529H19.5685C19.9586 20.3529 20.3326 20.167 20.6084 19.8361C20.8842 19.5051 21.0391 19.0563 21.0391 18.5882V10.6471C21.0391 10.179 20.8842 9.73017 20.6084 9.39922C20.3326 9.06828 19.9586 8.88235 19.5685 8.88235H8.53913Z"
									fill="#7C6A46" />
							</svg>
							<svg
								class="mb-2"
								width="28"
								height="32"
								viewBox="0 0 28 32"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<ellipse cx="14" cy="16" rx="13.3333" ry="16" fill="#F2F2F2" />
								<path
									d="M9.38461 22.4231C9.38461 22.5372 9.35641 22.6487 9.30359 22.7436C9.25076 22.8385 9.17567 22.9124 9.08782 22.9561C8.99997 22.9997 8.90331 23.0112 8.81005 22.9889C8.71679 22.9667 8.63112 22.9117 8.56389 22.831C8.49665 22.7503 8.45086 22.6475 8.43231 22.5356C8.41376 22.4237 8.42328 22.3077 8.45967 22.2023C8.49606 22.0969 8.55768 22.0068 8.63674 21.9434C8.7158 21.88 8.80875 21.8462 8.90384 21.8462C9.03135 21.8462 9.15363 21.9069 9.2438 22.0151C9.33396 22.1233 9.38461 22.2701 9.38461 22.4231ZM10.8269 19.5385C10.7318 19.5385 10.6389 19.5723 10.5598 19.6357C10.4808 19.6991 10.4191 19.7892 10.3827 19.8946C10.3464 20 10.3368 20.116 10.3554 20.2279C10.3739 20.3399 10.4197 20.4427 10.487 20.5233C10.5542 20.604 10.6399 20.659 10.7331 20.6812C10.8264 20.7035 10.923 20.6921 11.0109 20.6484C11.0987 20.6047 11.1738 20.5308 11.2267 20.4359C11.2795 20.341 11.3077 20.2295 11.3077 20.1154C11.3077 19.9624 11.257 19.8156 11.1669 19.7074C11.0767 19.5992 10.9544 19.5385 10.8269 19.5385ZM6.98077 19.5385C6.88568 19.5385 6.79273 19.5723 6.71367 19.6357C6.63461 19.6991 6.57298 19.7892 6.5366 19.8946C6.50021 20 6.49069 20.116 6.50924 20.2279C6.52779 20.3399 6.57358 20.4427 6.64081 20.5233C6.70805 20.604 6.79372 20.659 6.88698 20.6812C6.98024 20.7035 7.0769 20.6921 7.16475 20.6484C7.2526 20.6047 7.32769 20.5308 7.38051 20.4359C7.43334 20.341 7.46154 20.2295 7.46154 20.1154C7.46154 19.9624 7.41088 19.8156 7.32072 19.7074C7.23056 19.5992 7.10828 19.5385 6.98077 19.5385ZM8.90384 17.2308C8.80875 17.2308 8.7158 17.2646 8.63674 17.328C8.55768 17.3914 8.49606 17.4815 8.45967 17.5869C8.42328 17.6923 8.41376 17.8083 8.43231 17.9203C8.45086 18.0322 8.49665 18.135 8.56389 18.2156C8.63112 18.2963 8.71679 18.3513 8.81005 18.3735C8.90331 18.3958 8.99997 18.3844 9.08782 18.3407C9.17567 18.297 9.25076 18.2231 9.30359 18.1282C9.35641 18.0333 9.38461 17.9218 9.38461 17.8077C9.38461 17.6547 9.33396 17.5079 9.2438 17.3998C9.15363 17.2916 9.03135 17.2308 8.90384 17.2308ZM20.923 8.28849C20.923 8.36499 20.8977 8.43837 20.8526 8.49246C20.8076 8.54656 20.7464 8.57695 20.6827 8.57695H18.9585C18.8949 8.57708 18.834 8.60742 18.789 8.66133L17.0607 10.7354L15.7464 19.9712C15.7245 20.1278 15.6671 20.2741 15.5805 20.3942C15.4939 20.5143 15.3814 20.6034 15.2554 20.6519C15.1837 20.6791 15.1089 20.6927 15.0336 20.6923C14.8429 20.6917 14.66 20.6004 14.5252 20.4385L8.63581 13.3712C8.54186 13.259 8.47547 13.118 8.44393 12.9635C8.41239 12.8091 8.41693 12.6472 8.45704 12.4956C8.49716 12.3441 8.57129 12.2087 8.67131 12.1044C8.77134 12.0001 8.89338 11.9309 9.02403 11.9043L16.7163 10.3272L18.4447 8.25315C18.512 8.17207 18.5921 8.10792 18.6803 8.06446C18.7686 8.02099 18.8631 7.99909 18.9585 8.00003H20.6827C20.7464 8.00003 20.8076 8.03042 20.8526 8.08452C20.8977 8.13861 20.923 8.21199 20.923 8.28849ZM16.5426 10.9488L9.10637 12.4712C9.06263 12.4796 9.02169 12.5024 8.98807 12.537C8.95445 12.5716 8.92945 12.6167 8.91584 12.6673C8.90222 12.7179 8.90052 12.772 8.91092 12.8237C8.92131 12.8753 8.94341 12.9226 8.97476 12.9601L14.8642 20.0274C14.8954 20.065 14.9346 20.0915 14.9776 20.1041C15.0206 20.1166 15.0656 20.1147 15.1077 20.0985C15.1499 20.0824 15.1874 20.0526 15.2164 20.0124C15.2453 19.9722 15.2644 19.9233 15.2716 19.8709L16.5426 10.9488Z"
									fill="#7C6A46" />
							</svg>
							<svg
								class="mb-2"
								width="28"
								height="32"
								viewBox="0 0 28 32"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<ellipse
									cx="14.1666"
									cy="16"
									rx="13.3333"
									ry="16"
									fill="#F2F2F2" />
								<path
									d="M16.9597 17.4951C16.2814 16.8154 15.4264 16.4418 14.5427 16.4389C13.659 16.4359 12.8023 16.8039 12.1209 17.4791V17.4951M19.2694 14.3444C17.9354 13.0238 16.26 12.3016 14.5307 12.3016C12.8014 12.3016 11.126 13.0238 9.79207 14.3444M21.5463 11.0373C19.5715 9.07422 17.0876 8 14.5232 8C11.9588 8 9.47484 9.07422 7.5 11.0373M14.5307 19.3557C14.2304 19.3557 13.9368 19.4626 13.6871 19.6628C13.4374 19.863 13.2428 20.1476 13.1279 20.4806C13.0129 20.8135 12.9829 21.1799 13.0415 21.5333C13.1001 21.8868 13.2447 22.2115 13.457 22.4663C13.6694 22.7211 13.9399 22.8947 14.2345 22.965C14.529 23.0353 14.8344 22.9992 15.1118 22.8613C15.3893 22.7234 15.6264 22.4898 15.7933 22.1902C15.9601 21.8905 16.0492 21.5382 16.0492 21.1779C16.0492 20.9386 16.0099 20.7016 15.9336 20.4806C15.8573 20.2595 15.7454 20.0586 15.6044 19.8894C15.4634 19.7202 15.296 19.586 15.1118 19.4944C14.9276 19.4029 14.7301 19.3557 14.5307 19.3557Z"
									stroke="#7C6A46"
									stroke-linecap="round"
									stroke-linejoin="round" />
							</svg>`
    ]
  },
  
  {
    image: "images/chambres/photo-chambre.jpg",
    titre: "Chambre avec lit simple",
    prix: "145.000 FCFA",
    disponibilite: "oui",
    emoticons: [
      `<svg
								class="mb-2"
								width="28"
								height="32"
								viewBox="0 0 28 32"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<ellipse
									cx="13.8333"
									cy="16"
									rx="13.3333"
									ry="16"
									fill="#F2F2F2" />
								<path
									d="M11.4803 23V22.1176H12.2156V21.2353H8.53913C7.9541 21.2353 7.39302 20.9564 6.97934 20.46C6.56566 19.9636 6.33325 19.2903 6.33325 18.5882V10.6471C6.33325 9.94502 6.56566 9.27173 6.97934 8.77531C7.39302 8.27889 7.9541 8 8.53913 8H19.5685C20.1536 8 20.7147 8.27889 21.1283 8.77531C21.542 9.27173 21.7744 9.94502 21.7744 10.6471V18.5882C21.7744 19.2903 21.542 19.9636 21.1283 20.46C20.7147 20.9564 20.1536 21.2353 19.5685 21.2353H15.8921V22.1176H16.6274V23H11.4803ZM12.9509 21.2353V22.1176H15.1568V21.2353H12.9509ZM8.53913 8.88235C8.14911 8.88235 7.77506 9.06828 7.49927 9.39922C7.22348 9.73017 7.06855 10.179 7.06855 10.6471V18.5882C7.06855 19.0563 7.22348 19.5051 7.49927 19.8361C7.77506 20.167 8.14911 20.3529 8.53913 20.3529H19.5685C19.9586 20.3529 20.3326 20.167 20.6084 19.8361C20.8842 19.5051 21.0391 19.0563 21.0391 18.5882V10.6471C21.0391 10.179 20.8842 9.73017 20.6084 9.39922C20.3326 9.06828 19.9586 8.88235 19.5685 8.88235H8.53913Z"
									fill="#7C6A46" />
							</svg>
							<svg
								class="mb-2"
								width="28"
								height="32"
								viewBox="0 0 28 32"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<ellipse cx="14" cy="16" rx="13.3333" ry="16" fill="#F2F2F2" />
								<path
									d="M9.38461 22.4231C9.38461 22.5372 9.35641 22.6487 9.30359 22.7436C9.25076 22.8385 9.17567 22.9124 9.08782 22.9561C8.99997 22.9997 8.90331 23.0112 8.81005 22.9889C8.71679 22.9667 8.63112 22.9117 8.56389 22.831C8.49665 22.7503 8.45086 22.6475 8.43231 22.5356C8.41376 22.4237 8.42328 22.3077 8.45967 22.2023C8.49606 22.0969 8.55768 22.0068 8.63674 21.9434C8.7158 21.88 8.80875 21.8462 8.90384 21.8462C9.03135 21.8462 9.15363 21.9069 9.2438 22.0151C9.33396 22.1233 9.38461 22.2701 9.38461 22.4231ZM10.8269 19.5385C10.7318 19.5385 10.6389 19.5723 10.5598 19.6357C10.4808 19.6991 10.4191 19.7892 10.3827 19.8946C10.3464 20 10.3368 20.116 10.3554 20.2279C10.3739 20.3399 10.4197 20.4427 10.487 20.5233C10.5542 20.604 10.6399 20.659 10.7331 20.6812C10.8264 20.7035 10.923 20.6921 11.0109 20.6484C11.0987 20.6047 11.1738 20.5308 11.2267 20.4359C11.2795 20.341 11.3077 20.2295 11.3077 20.1154C11.3077 19.9624 11.257 19.8156 11.1669 19.7074C11.0767 19.5992 10.9544 19.5385 10.8269 19.5385ZM6.98077 19.5385C6.88568 19.5385 6.79273 19.5723 6.71367 19.6357C6.63461 19.6991 6.57298 19.7892 6.5366 19.8946C6.50021 20 6.49069 20.116 6.50924 20.2279C6.52779 20.3399 6.57358 20.4427 6.64081 20.5233C6.70805 20.604 6.79372 20.659 6.88698 20.6812C6.98024 20.7035 7.0769 20.6921 7.16475 20.6484C7.2526 20.6047 7.32769 20.5308 7.38051 20.4359C7.43334 20.341 7.46154 20.2295 7.46154 20.1154C7.46154 19.9624 7.41088 19.8156 7.32072 19.7074C7.23056 19.5992 7.10828 19.5385 6.98077 19.5385ZM8.90384 17.2308C8.80875 17.2308 8.7158 17.2646 8.63674 17.328C8.55768 17.3914 8.49606 17.4815 8.45967 17.5869C8.42328 17.6923 8.41376 17.8083 8.43231 17.9203C8.45086 18.0322 8.49665 18.135 8.56389 18.2156C8.63112 18.2963 8.71679 18.3513 8.81005 18.3735C8.90331 18.3958 8.99997 18.3844 9.08782 18.3407C9.17567 18.297 9.25076 18.2231 9.30359 18.1282C9.35641 18.0333 9.38461 17.9218 9.38461 17.8077C9.38461 17.6547 9.33396 17.5079 9.2438 17.3998C9.15363 17.2916 9.03135 17.2308 8.90384 17.2308ZM20.923 8.28849C20.923 8.36499 20.8977 8.43837 20.8526 8.49246C20.8076 8.54656 20.7464 8.57695 20.6827 8.57695H18.9585C18.8949 8.57708 18.834 8.60742 18.789 8.66133L17.0607 10.7354L15.7464 19.9712C15.7245 20.1278 15.6671 20.2741 15.5805 20.3942C15.4939 20.5143 15.3814 20.6034 15.2554 20.6519C15.1837 20.6791 15.1089 20.6927 15.0336 20.6923C14.8429 20.6917 14.66 20.6004 14.5252 20.4385L8.63581 13.3712C8.54186 13.259 8.47547 13.118 8.44393 12.9635C8.41239 12.8091 8.41693 12.6472 8.45704 12.4956C8.49716 12.3441 8.57129 12.2087 8.67131 12.1044C8.77134 12.0001 8.89338 11.9309 9.02403 11.9043L16.7163 10.3272L18.4447 8.25315C18.512 8.17207 18.5921 8.10792 18.6803 8.06446C18.7686 8.02099 18.8631 7.99909 18.9585 8.00003H20.6827C20.7464 8.00003 20.8076 8.03042 20.8526 8.08452C20.8977 8.13861 20.923 8.21199 20.923 8.28849ZM16.5426 10.9488L9.10637 12.4712C9.06263 12.4796 9.02169 12.5024 8.98807 12.537C8.95445 12.5716 8.92945 12.6167 8.91584 12.6673C8.90222 12.7179 8.90052 12.772 8.91092 12.8237C8.92131 12.8753 8.94341 12.9226 8.97476 12.9601L14.8642 20.0274C14.8954 20.065 14.9346 20.0915 14.9776 20.1041C15.0206 20.1166 15.0656 20.1147 15.1077 20.0985C15.1499 20.0824 15.1874 20.0526 15.2164 20.0124C15.2453 19.9722 15.2644 19.9233 15.2716 19.8709L16.5426 10.9488Z"
									fill="#7C6A46" />
							</svg>
							<svg
								class="mb-2"
								width="28"
								height="32"
								viewBox="0 0 28 32"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<ellipse
									cx="14.1666"
									cy="16"
									rx="13.3333"
									ry="16"
									fill="#F2F2F2" />
								<path
									d="M16.9597 17.4951C16.2814 16.8154 15.4264 16.4418 14.5427 16.4389C13.659 16.4359 12.8023 16.8039 12.1209 17.4791V17.4951M19.2694 14.3444C17.9354 13.0238 16.26 12.3016 14.5307 12.3016C12.8014 12.3016 11.126 13.0238 9.79207 14.3444M21.5463 11.0373C19.5715 9.07422 17.0876 8 14.5232 8C11.9588 8 9.47484 9.07422 7.5 11.0373M14.5307 19.3557C14.2304 19.3557 13.9368 19.4626 13.6871 19.6628C13.4374 19.863 13.2428 20.1476 13.1279 20.4806C13.0129 20.8135 12.9829 21.1799 13.0415 21.5333C13.1001 21.8868 13.2447 22.2115 13.457 22.4663C13.6694 22.7211 13.9399 22.8947 14.2345 22.965C14.529 23.0353 14.8344 22.9992 15.1118 22.8613C15.3893 22.7234 15.6264 22.4898 15.7933 22.1902C15.9601 21.8905 16.0492 21.5382 16.0492 21.1779C16.0492 20.9386 16.0099 20.7016 15.9336 20.4806C15.8573 20.2595 15.7454 20.0586 15.6044 19.8894C15.4634 19.7202 15.296 19.586 15.1118 19.4944C14.9276 19.4029 14.7301 19.3557 14.5307 19.3557Z"
									stroke="#7C6A46"
									stroke-linecap="round"
									stroke-linejoin="round" />
							</svg>`
    ]
  },
  
  {
    image: "images/chambres/photo-chambre.jpg",
    titre: "Chambre avec lit simple",
    prix: "145.000 FCFA",
    disponibilite: "oui",
    emoticons: [
      `<svg
								class="mb-2"
								width="28"
								height="32"
								viewBox="0 0 28 32"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<ellipse
									cx="13.8333"
									cy="16"
									rx="13.3333"
									ry="16"
									fill="#F2F2F2" />
								<path
									d="M11.4803 23V22.1176H12.2156V21.2353H8.53913C7.9541 21.2353 7.39302 20.9564 6.97934 20.46C6.56566 19.9636 6.33325 19.2903 6.33325 18.5882V10.6471C6.33325 9.94502 6.56566 9.27173 6.97934 8.77531C7.39302 8.27889 7.9541 8 8.53913 8H19.5685C20.1536 8 20.7147 8.27889 21.1283 8.77531C21.542 9.27173 21.7744 9.94502 21.7744 10.6471V18.5882C21.7744 19.2903 21.542 19.9636 21.1283 20.46C20.7147 20.9564 20.1536 21.2353 19.5685 21.2353H15.8921V22.1176H16.6274V23H11.4803ZM12.9509 21.2353V22.1176H15.1568V21.2353H12.9509ZM8.53913 8.88235C8.14911 8.88235 7.77506 9.06828 7.49927 9.39922C7.22348 9.73017 7.06855 10.179 7.06855 10.6471V18.5882C7.06855 19.0563 7.22348 19.5051 7.49927 19.8361C7.77506 20.167 8.14911 20.3529 8.53913 20.3529H19.5685C19.9586 20.3529 20.3326 20.167 20.6084 19.8361C20.8842 19.5051 21.0391 19.0563 21.0391 18.5882V10.6471C21.0391 10.179 20.8842 9.73017 20.6084 9.39922C20.3326 9.06828 19.9586 8.88235 19.5685 8.88235H8.53913Z"
									fill="#7C6A46" />
							</svg>
							<svg
								class="mb-2"
								width="28"
								height="32"
								viewBox="0 0 28 32"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<ellipse cx="14" cy="16" rx="13.3333" ry="16" fill="#F2F2F2" />
								<path
									d="M9.38461 22.4231C9.38461 22.5372 9.35641 22.6487 9.30359 22.7436C9.25076 22.8385 9.17567 22.9124 9.08782 22.9561C8.99997 22.9997 8.90331 23.0112 8.81005 22.9889C8.71679 22.9667 8.63112 22.9117 8.56389 22.831C8.49665 22.7503 8.45086 22.6475 8.43231 22.5356C8.41376 22.4237 8.42328 22.3077 8.45967 22.2023C8.49606 22.0969 8.55768 22.0068 8.63674 21.9434C8.7158 21.88 8.80875 21.8462 8.90384 21.8462C9.03135 21.8462 9.15363 21.9069 9.2438 22.0151C9.33396 22.1233 9.38461 22.2701 9.38461 22.4231ZM10.8269 19.5385C10.7318 19.5385 10.6389 19.5723 10.5598 19.6357C10.4808 19.6991 10.4191 19.7892 10.3827 19.8946C10.3464 20 10.3368 20.116 10.3554 20.2279C10.3739 20.3399 10.4197 20.4427 10.487 20.5233C10.5542 20.604 10.6399 20.659 10.7331 20.6812C10.8264 20.7035 10.923 20.6921 11.0109 20.6484C11.0987 20.6047 11.1738 20.5308 11.2267 20.4359C11.2795 20.341 11.3077 20.2295 11.3077 20.1154C11.3077 19.9624 11.257 19.8156 11.1669 19.7074C11.0767 19.5992 10.9544 19.5385 10.8269 19.5385ZM6.98077 19.5385C6.88568 19.5385 6.79273 19.5723 6.71367 19.6357C6.63461 19.6991 6.57298 19.7892 6.5366 19.8946C6.50021 20 6.49069 20.116 6.50924 20.2279C6.52779 20.3399 6.57358 20.4427 6.64081 20.5233C6.70805 20.604 6.79372 20.659 6.88698 20.6812C6.98024 20.7035 7.0769 20.6921 7.16475 20.6484C7.2526 20.6047 7.32769 20.5308 7.38051 20.4359C7.43334 20.341 7.46154 20.2295 7.46154 20.1154C7.46154 19.9624 7.41088 19.8156 7.32072 19.7074C7.23056 19.5992 7.10828 19.5385 6.98077 19.5385ZM8.90384 17.2308C8.80875 17.2308 8.7158 17.2646 8.63674 17.328C8.55768 17.3914 8.49606 17.4815 8.45967 17.5869C8.42328 17.6923 8.41376 17.8083 8.43231 17.9203C8.45086 18.0322 8.49665 18.135 8.56389 18.2156C8.63112 18.2963 8.71679 18.3513 8.81005 18.3735C8.90331 18.3958 8.99997 18.3844 9.08782 18.3407C9.17567 18.297 9.25076 18.2231 9.30359 18.1282C9.35641 18.0333 9.38461 17.9218 9.38461 17.8077C9.38461 17.6547 9.33396 17.5079 9.2438 17.3998C9.15363 17.2916 9.03135 17.2308 8.90384 17.2308ZM20.923 8.28849C20.923 8.36499 20.8977 8.43837 20.8526 8.49246C20.8076 8.54656 20.7464 8.57695 20.6827 8.57695H18.9585C18.8949 8.57708 18.834 8.60742 18.789 8.66133L17.0607 10.7354L15.7464 19.9712C15.7245 20.1278 15.6671 20.2741 15.5805 20.3942C15.4939 20.5143 15.3814 20.6034 15.2554 20.6519C15.1837 20.6791 15.1089 20.6927 15.0336 20.6923C14.8429 20.6917 14.66 20.6004 14.5252 20.4385L8.63581 13.3712C8.54186 13.259 8.47547 13.118 8.44393 12.9635C8.41239 12.8091 8.41693 12.6472 8.45704 12.4956C8.49716 12.3441 8.57129 12.2087 8.67131 12.1044C8.77134 12.0001 8.89338 11.9309 9.02403 11.9043L16.7163 10.3272L18.4447 8.25315C18.512 8.17207 18.5921 8.10792 18.6803 8.06446C18.7686 8.02099 18.8631 7.99909 18.9585 8.00003H20.6827C20.7464 8.00003 20.8076 8.03042 20.8526 8.08452C20.8977 8.13861 20.923 8.21199 20.923 8.28849ZM16.5426 10.9488L9.10637 12.4712C9.06263 12.4796 9.02169 12.5024 8.98807 12.537C8.95445 12.5716 8.92945 12.6167 8.91584 12.6673C8.90222 12.7179 8.90052 12.772 8.91092 12.8237C8.92131 12.8753 8.94341 12.9226 8.97476 12.9601L14.8642 20.0274C14.8954 20.065 14.9346 20.0915 14.9776 20.1041C15.0206 20.1166 15.0656 20.1147 15.1077 20.0985C15.1499 20.0824 15.1874 20.0526 15.2164 20.0124C15.2453 19.9722 15.2644 19.9233 15.2716 19.8709L16.5426 10.9488Z"
									fill="#7C6A46" />
							</svg>
							<svg
								class="mb-2"
								width="28"
								height="32"
								viewBox="0 0 28 32"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<ellipse
									cx="14.1666"
									cy="16"
									rx="13.3333"
									ry="16"
									fill="#F2F2F2" />
								<path
									d="M16.9597 17.4951C16.2814 16.8154 15.4264 16.4418 14.5427 16.4389C13.659 16.4359 12.8023 16.8039 12.1209 17.4791V17.4951M19.2694 14.3444C17.9354 13.0238 16.26 12.3016 14.5307 12.3016C12.8014 12.3016 11.126 13.0238 9.79207 14.3444M21.5463 11.0373C19.5715 9.07422 17.0876 8 14.5232 8C11.9588 8 9.47484 9.07422 7.5 11.0373M14.5307 19.3557C14.2304 19.3557 13.9368 19.4626 13.6871 19.6628C13.4374 19.863 13.2428 20.1476 13.1279 20.4806C13.0129 20.8135 12.9829 21.1799 13.0415 21.5333C13.1001 21.8868 13.2447 22.2115 13.457 22.4663C13.6694 22.7211 13.9399 22.8947 14.2345 22.965C14.529 23.0353 14.8344 22.9992 15.1118 22.8613C15.3893 22.7234 15.6264 22.4898 15.7933 22.1902C15.9601 21.8905 16.0492 21.5382 16.0492 21.1779C16.0492 20.9386 16.0099 20.7016 15.9336 20.4806C15.8573 20.2595 15.7454 20.0586 15.6044 19.8894C15.4634 19.7202 15.296 19.586 15.1118 19.4944C14.9276 19.4029 14.7301 19.3557 14.5307 19.3557Z"
									stroke="#7C6A46"
									stroke-linecap="round"
									stroke-linejoin="round" />
							</svg>`
    ]
  },
];

const container = document.querySelector('#room-container');

chambres.forEach((chambre) => {
  const chambreHTML = `
    <div class="col">
      <div class="card">
        <img src="${chambre.image}" class="card-img-top" alt="photo de ${chambre.titre}" width="390" loading="lazy">
        <div class="card-body">
          <h5 class="card-title titre-chambre">${chambre.titre}</h5>
          <div class="d-flex justify-content-between align-items-center flex-wrap">
            <h6 class="card-text fw-bold">${chambre.prix}</h6>
            <p class="card-text mb-2">Disponible : ${chambre.disponibilite}</p>
          </div>
          <hr />
          <div class="d-flex flex-row justify-content-between align-items-center">
            <div>
              ${chambre.emoticons.join("")}
            </div>
            <button class="align-self-end btn btn-consulter mb-2">Consulter</button>
          </div>
        </div>
      </div>
    </div>
  `;

  container.innerHTML += chambreHTML;
});

// Ajouter le bouton "Voir plus de chambres"
const voirPlus = `
  <div class="col">
    <div class="card d-flex justify-content-center align-items-center" style="height: 100%">
      <a href="">Voir plus de chambres</a>
    </div>
  </div>
`;
container.innerHTML += voirPlus;

/*

// Sélectionne le conteneur où les cartes seront ajoutées
const container = document.querySelector('#room-container');

// URL de l'API, à remplacer par l'URL de votre API
const apiUrl = 'votre-url-api-ici';

// Utiliser fetch pour récupérer les données depuis l'API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Supposons que 'data' est un tableau d'objets de chambre
    data.forEach((chambre) => {
      const chambreHTML = `
        <div class="col">
          <div class="card">
            <img src="${chambre.image}" class="card-img-top" alt="photo de ${chambre.titre}" width="390" loading="lazy">
            <div class="card-body">
              <h5 class="card-title titre-chambre">${chambre.titre}</h5>
              <div class="d-flex justify-content-between align-items-center flex-wrap">
                <h6 class="card-text fw-bold">${chambre.prix}</h6>
                <p class="card-text mb-2">Disponible : ${chambre.disponibilite}</p>
              </div>
              <hr />
              <div class="d-flex flex-row justify-content-between align-items-center">
                <div>
                  ${chambre.emoticons ? chambre.emoticons.map(emoticon => `<svg class="mb-2" width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">${emoticon}</svg>`).join('') : ''}
                </div>
                <button class="align-self-end btn btn-consulter mb-2">Consulter</button>
              </div>
            </div>
          </div>
        </div>
      `;
      container.innerHTML += chambreHTML;
    });

    // Ajouter le bouton "Voir plus de chambres"
    const voirPlus = `
      <div class="col">
        <div class="card d-flex justify-content-center align-items-center" style="height: 100%">
          <a href="">Voir plus de chambres</a>
        </div>
      </div>
    `;
    container.innerHTML += voirPlus;
  })
  .catch(error => {
    console.error('Une erreur s\'est produite lors de la récupération des données:', error);
    container.innerHTML = '<div class="col"><div class="alert alert-danger">Erreur de chargement des chambres. Veuillez réessayer plus tard.</div></div>';
  });*/