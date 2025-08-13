import React from "react";

function Footer({ id }) {
  return (
    <section id={id} className="section bg-white text-center ">
      <div className="container max-w-xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Fale com a gent</h2>
        <p className="text-lg mb-8 ">
          Dúvidas, orçamento ou sugestões? Estamos prontos para ajudar.
        </p>

        <div className="flex justify-center gap-6">
          {/* WhatsApp */}
          <a
            href="https://wa.me/5535998428761"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-circle"
            aria-label="WhatsApp"
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/whatsapp.svg`}
              alt="WhatsApp"
              className="w-6 h-6"
            />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/coapinfotech/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-circle"
            aria-label="Instagram"
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/instagram.svg`}
              alt="Instagram"
              className="w-6 h-6"
            />
          </a>

          <a
            href="https://www.facebook.com/marketplace/profile/61556148712113/?ref=permalink&mibextid=dXMIcH"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-circle"
            aria-label="Facebook"
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/facebook2.svg`}
              alt="Facebook"
              className="w-10 h-10"
            />
          </a>

          <a
            href="https://www.google.com/maps/place/COAP+Infotech/@-21.4304419,-45.9609206,13z/data=!4m6!3m5!1s0x2b3830ed1d4da123:0x95c09f80cf82f388!8m2!3d-21.4273595!4d-45.9613681!16s%2Fg%2F11vxm1q3l_?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-circle"
            aria-label="Google"
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/google.svg`}
              alt="Google"
              className="w-6 h-6"
            />
          </a>

          <a
            href="https://linktr.ee/coapinfotech"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-circle"
            aria-label="Linktr"
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/link.svg`}
              alt="Linktr"
              className="w-6 h-6"
            />
          </a>
          {/* E-mail */}
          <a
            href="mailto:coapinfotech@gmail.com"
            className="icon-circle"
            aria-label="E-mail"
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/email.svg`}
              alt="E-mail"
              className="w-6 h-6"
            />
          </a>
        </div>
        <div className="no-results-message-2 ">CNPJ: 22.228.397/0001-06</div>
      </div>
    </section>
  );
}

export default Footer;
