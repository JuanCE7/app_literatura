export interface Autor {
    nombre: string;
    especialidad: string;
    ensayos: number;
    foto: string;
    descripcion: string;
    temas: string[];
    color: string;
    redes: {
      instagram: string;
      facebook: string;
      email: string;
    };
  }
  
  export const autores: Autor[] = [
    {
      nombre: "María José Moscol Castillo",
      especialidad: "Narrativa Contemporánea",
      ensayos: 1,
      foto: "https://lh3.googleusercontent.com/a-/ALV-UjVpgKV6TBwZeGBhp9OgewrhH02nikq1NWGuqLjzBDJaVinHZW1QTl12eV_c1CSsEtJ1YgI3kx3nsM2yJQNgJH0IvKIYq6HCkMBeaEnJl0JNmsUsjVZeTUQbdLBv9R62AaDZ_Gk9CRxnZaN7U0lzJiXzjRjAt0PKIRM7xsV5shruJXoQ_ndElUDk7Xy_qEyTpK-58GqHqG-rPhdqhL8PSe6d35IfzIEmRgNcwQGJSsf0TNf7PHWOeJIOWJQSVAl7udUeo_OxTAYKmKTB4e1OnrTDnEu3isMOd07H1KEpNpOJOHQZWzMTtfzIQjSXsAZ0VE0VGbKrvxudzG8qua7kOZ2YCWykkfdEGZOXO_5aGQwOMLKllV5wD4ELp1AC1k7KW3MeVM6hjX6UgmWkYWDi37S9u6HBYnYPqsC31IldxWx4sKyAVUomua7_I5F2AmaACGqFksY7arRFrkvKmhOrZ-U48BIoLT3cYvDnB3tJLwchg7wxpvxne3MmesblEIkFbsQ765e-WJtCNSOi-dKvZOEJZkdzOGtYVmMwUZFuSu2ffzQtjbP2Pvg3sp2vPuWgWAlv8c2oOJcJDXMBEB1KvfDHseLjrwZuEN0xj41O44_xNf6_zX-fPmuK_uPiP7LOXq7XYvRz6VxlafcfpAvkJwJj5IDdblSV6SXAuB3TrUm8ulWJPH791EiY5v2boFpmJGMlpuVphjp2VTMXfhrNQwULncwFJWRKXSd7A-12KoQKGvh9ERyh0VUbcwsfrznyScsqcw7NEbXoY3IlEczBiwRto8FdGu7cn9T1GWwMw0UmPsdvZjt9rreshZbk5PaWeTWKiDr6eNEUInHrmrSEtq-6NcvfGLLb8_bkJYZIOPRhQvh1n66VuSea4JiW7syX5BGHiKPK17OPjc75GlXcxGKrHJGbAd_HLUrfgfTCQcQN9BXPeNkRLUSQdOeJbtzwfuV7Xg08GE970GalEkR8gRd70B3v8vXQ0g=s240-p-k-rw-no",
      descripcion: "Estudiante de 6to Ciclo de Literatura. Especialista en análisis narrativo y pedagogía digital",
      temas: ["Realismo Mágico", "Pedagogía Digital", "Literatura Juvenil"],
      color: "from-purple-400 to-pink-400",
      redes: {
        instagram: "@maria.literatura",
        facebook: "profile.php?id=100010058592563",
        email: "maria.moscol@unl.edu.ec"
      }
    },
    {
      nombre: "Valeria Guadalupe Mallaguari Yaguana",
      especialidad: "Crítica Literaria",
      ensayos: 1,
      foto: "https://lh3.googleusercontent.com/a-/ALV-UjVkMOzjHf8QNtN7E_7QxqmlCj_UBvRWTxCKRUDf3yX_KCU5M8zaKwf4_JhnpN51LiCtl5qfsMaY9pBBeVdu5VrKFXhKKaw-Hds9dfpOpnyqUpCEoW72xETXOz1OxwX7o6us5M7IQ4DXEacIEN9YPO3vkDOsRRZnMTxhBuwU78rMTae536aH51R2m7QTug_Z4SFVdn9hVVIYyNAoOdlXjEJehvkIVFU4cFb4VSuEWrmrs-9kJGDLhh76-UAgKhNd2t_Ald635PpMoAi3giZcLqDtWMXuhMwexb1uKIJ7JdCmv0W4Ic-NDaj_muAi3hMYX2xdDsF95QZLQCBVjC0i1Rm3_Xr4PHGthfSW5r94yAkbii2D4vIsFYqE3jBvx4NQsZHcno9FV4q2Jk4eGFT4NF3tXZvp-WrIerYw3YBNK0ZznJOcJa89U10m023Uk1R3rHM6tN44KUJdLeNBQ8zcER-Y9O0jMCaOJBEzIoM1nTdt9BLHnD67YGuh0CaPCLXACHDHNZ0tELWVmYIkWl4hsBI8YqECkTirvt2SmM3vlRziCLLqKkawROfgQf79IG3ZbWne4qqp6xxhSS5bX3TwkNDR1Fu8qr_O8j0X9ZvFvony8RIMaf9Tz57pfv9MSWlrElNsRmQ4uy7QNG6dYnuTw19RuDKpMVDyxhb0TlTM1Y8WCB3J4pYYUg0Q5Y-eKUjd8eVqrgEDPPhTzZ9alv-YBmv-WjWFMUcS9CUv5T2IBHut-Z2Q5Y8SCTMmjEZ814OM3IU4M816vzG5eNYAHjbs9CiZz2RAIzA8mA2AhzvssbC3JKmKbrjScpvLfLQ0-66_3VZUb-9YmZ_hg9dXTVJBlo4qndAMQsJA0tUN5fcNY1SkyT-bRy5-v0zA7KGRWC-8jDIjg8A30lLjFtTAQHTKLi_rIN2pizt96crh7sIioDdRMTNs0Ovk2-0Opwu0BgIQj5_0I4UyHYbRzskdWcmGwTMHrQKCutye=s240-p-k-rw-no",
      descripcion: "Investigador en hermenéutica literaria y metodologías de enseñanza innovadoras. Pionero en el uso de tecnología educativa.",
      temas: ["Hermenéutica", "Tecnología Educativa", "Análisis Textual"],
      color: "from-blue-400 to-cyan-400",
      redes: {
        instagram: "@carlos.critica",
        facebook: "Carlos Ruiz Académico",
        email: "carlos.ruiz@edu.pe"
      }
    },
    {
      nombre: "MIRIAM LILIANA ALVAREZ MERINO",
      especialidad: "Poesía y Expresión",
      ensayos: 2,
      foto: "https://lh3.googleusercontent.com/a-/ALV-UjV-5kqz7QyNe_O4ng7pqM1rtYSzkA3NU6gj8BjqURzG2-K0WhEI7oWP0hbuxTzKUDji5HMw8IRhlTz1RM9k09u4EVZ5zcNPMkeY3QG9DyBYMXEsn5LpdyGxqdxZl1DozgdWVBAAZBbav3DJq-bDVlNwmKO_3UqR5NctZcZkeWK49eT6Ar04JKKjAJ3NwfOdQFpnOofgbV9I_vLwZghlKguSE5iTyFEmrkV3Zq8uFboXBRQuvG2pRWxInLvLlFfWLoJURDp3LgR_pL-H7dhyTLtFVJg1JF0lrVGCT8KqU3bHBz6JRcNj7PLNME9Z5Ukj_H26Hhn787cgXMFUbpuPq4rQfMLJCm20DXgXiUaSkg0ajxIH-z03fAo6hByX_wiE1sAPZuoRXr34WEcwEzPULUigK32Knu_ZRI2jFJKdwVSSX7ECzme986txpUNFaE46XVNE1vRuTgXcZeRpAIvS8m0zUmSm0DlfRujPHvHz9CELqp5HyedZodDyrOibg25SjBa8mo57yuDo--dbcewZyNzE-38Dqjz8WuQ_fdzPITuvoxeoY7QRV-WxVtEuelIyDSBge-nfgh5I9DMumlC_wtpJUbgAHSOaYbBItNKN-SG4I7zpxKyIVK_sYwj9b5SKr_SMeNfpucbCocf_zbptoOXg1jqqpP90WcjfQxh65kdMn9v3dLk_oxrPr9V_h4kd1vzH2aoirFDjWaY3jkcI0wBp_t8ctADruhWrCu5F204t_RfkJNR0IS4e2szwSG7eNqUFBqLEOCD4vfnB3NvqFEhzPcCYa5gWsUEy7m2acknwSu_dPrrSDk1i4Wec5xks1Hd1lt2BhHH1cay47j_nxPIib7dKv3ZhuAVQOw1bt8mcsVDZszB0uMG8Ov7PzoWwIT7kZrJY9513ippFsMECXtdb4Ycm47Ur38WbOcxp8hnyloIzCo7Z2yoC-ZNq6jZO1MAlpgjvST3LLYE_LFrdYkvWA7QNnVQ=s240-p-k-rw-no",
      descripcion: "Experta en poesía contemporánea y técnicas de expresión creativa. Desarrolla métodos innovadores para la enseñanza poética.",
      temas: ["Poesía Contemporánea", "Expresión Creativa", "Métrica"],
      color: "from-green-400 to-emerald-400",
      redes: {
        instagram: "@ana.poesia",
        facebook: "Ana Martínez Poesía",
        email: "ana.martinez@edu.pe"
      }
    },
    {
      nombre: "Evelin Alexandra Leon Macas",
      especialidad: "Literatura Clásica",
      ensayos: 5,
      foto: "https://lh3.googleusercontent.com/a-/ALV-UjV1iekwU20OTFa5ZWPIXHftM9FAhKJml4suXwvxqvWkuDVVUUhFexNRXuhbi2YkpMdheGUvKp_0JDDXU1RoD9eUDDpQpBqIRP00WxVUMES2wGav-0X8cgpA2Abc9HvLK09ekz6ExTzon-Rn2VP1atgXnOn_a2JwWL8GfQbZMZkQHxCE0n4DriFqzG7x8kXHHflEN1yT4FEsYSEAtLgVT1KWISlBIEWuxVuuiGkZ953_OE7SdCQ06H499uQNgSoaiB6k_Zcvo4RG8ifGutscS_pwof3x0pfg5qhGBJem0mJk7J__v2y09pFE_kcvJ475IupnALps280vULsxBs6z4enhDAwA5KWKS_Y4bN3LP4PzUhWsZR_m5fmbxxOTyA7dnx7GdnuG_6eWZx97x1Kp-XAESBMYy2KbuS16bpLrfB3491iNihcJ-PqoxzHs9AXBJ7mCNYMMLw-zWhMgoiDyw3gk9DgPal-KPEIRKxKS9e4IITRvaIMYES4conuoYL9mq_d1ph04VSdlIwy75VFZCtsBJu7OvD6hwYdp75IyBe00rkJAw7_2N-zycCq6A0wimbiAe4u8o0lqM_M5fsdVRX5zV_sMYAt3dSuRRT0MH2aan8DaF0eTeJfoeE-uEtOeX-qdtbh5Wud-29bLhKnD1mFU3QZwzm3tiS1-YzP0nV8Y2g58Oc9r6o1xl7zIz_umluCfIs5ghF1ZlATSwzrzM8lm3ZoT3KmOBOJEjm-onWkvz-4YMknYQj9jyXxKX6yNMzXWgkzpjdL6xfZKhkoLolsSJWdRl2Ah4z1PA5HdgjcRposiaebgSUg3lshQo7l2VLrxpPQxNv3D2lT3SqAmZ9mEWmJAW4Exf3Fe1kmVd3KB9j-X8YUpDUB2aLojn-7-JCtYnxoXDVKVxbPwzL-4n_tykHyVXhEkAAycGLpo2PK2CVWBm0zPbuMzH23onMoznna_mzcQwLQfOwXwSV3KsJambUOVmRV01g=s240-p-k-rw-no",
      descripcion: "Estudioso de los clásicos universales y su aplicación en contextos educativos modernos. Especialista en adaptaciones pedagógicas.",
      temas: ["Literatura Clásica", "Adaptaciones", "Historia Literaria"],
      color: "from-orange-400 to-red-400",
      redes: {
        instagram: "@diego.clasicos",
        facebook: "Diego Morales Literatura",
        email: "diego.morales@edu.pe"
      }
    },
    {
      nombre: "Steven Gilbert Sarango",
      especialidad: "Sociolingüística",
      ensayos: 3,
      foto: "https://lh3.googleusercontent.com/a-/ALV-UjXv8GpFz9jS_utkhSyQwEEJ31iRchA7wGspNvi7gajutmjOSNz1gsJdeW8kqiSpSIQEaNABaR3kTxD36coLRk0wWZ5DLAl3JKumuZAHvVkaU7QN2BDuWo3Se5ZArBe5C0hVz3mW0hY6mX_-fTpyvtRsM--rOaDfwH1fJlr0M58W2wuQxDR_tCD4j4t-IaAbcCO-5xZ8kq_aaO_VsPuJg7bnqGi7E-vZYdqJVBocUW86n2x8pcAve2q0GnmSa6-vcX8FGYjk_2bE6ctEFWbpuAdq4yLz2yeSMdwzJjR8-oyu8HXkDvTSkAznpRzxMAs1YONXQad_DVO3sj5262cbfH2g0wC0PGGFrlYeJuuB3RHFPp-0DNfDyrCzMGT88qt56eKxQVaBsWzOePDFIVOmFfnmOm5hLMPSnv72Leg1vHqUCgmMOJwRkyZ1u02uO2RiPm9ZTMvPC312JKvTHyFmJA5-BanLwFJzR3aGyupfPjnuuE3T8bmHMOFvSj9e3hR819UltoeM9HimUmrtUhYEAB4e6tPH1yHv5uhgq9jt883DpO0Ar9ocSRZYV1e_ixUH7ZdqpzSYKyEjE8So9Z-HpZv44T9y15JOi8HWFycYYXbrJtVXNd37T4lQvWpBBqyie4jr0JNq5CVJfUsqyzJR_CBt4tAcqHgDH6x_i1SA48UdRMUPhWJeWWCvy_mpCqZDwEqjRC0WR5FUufv9napJEAz02cq5XrVfgHBN7KAId8IDBwgH_nrsvpaZublCcBDfJjTQTqBY6L4bqN0k48k_CJ9YAPy9Q2Kk1u_3KXvGn7Gry3ZzSZQ4EOVbBKARW_6bsnAEBQ_1CYfqV0sLN6XpMSbJnMUQbezUqWF1GDGe4ddXDp8MT0kynhU-9G0421iLfzjnPnhk-FMPMJWy6K98w2Iay2SPOf-BiHXSRUqtAfRt_y1vX3wdsDps9JNdUzqkBNpLwTqGyhgGjIh4rq-e9cpKGw-nbmXbSA=s240-p-k-rw-no",
      descripcion: "Investigadora en el impacto social de la literatura y las variaciones lingüísticas en textos educativos contemporáneos.",
      temas: ["Sociolingüística", "Impacto Social", "Variaciones Lingüísticas"],
      color: "from-indigo-400 to-purple-400",
      redes: {
        instagram: "@isabella.socio",
        facebook: "Isabella Torres Investigación",
        email: "isabella.torres@edu.pe"
      }
    },
    {
      nombre: "Yanela Elizabeth Armijos Chamba",
      especialidad: "Didáctica Literaria",
      ensayos: 4,
      foto: "https://lh3.googleusercontent.com/a-/ALV-UjV_rKISa_WR6SzhIDDdEoQtdc01ktiOWzBSxKI3ScXrMh1BTAHchS6ltyduBrYf0BQMLXgqBO7qB57P5dDdbxZ-S8xDBBLRPIosKsWwFjksrC2rnzQYNZ0Yf0PXGRB83tJa-LGBT_fUdA-QWeBY4ABoVRLMH5W8ug09dkG_LRvDkyjhgFUKS12RYKgAZdJBbrhE0XfH4GNcOB-MHZTQ-iXSEX0IdjMjMEhESyLanzWHjj1aJtBLMoY9y787fjkZwZiqKxBD9XgERJW6uqggaD1SF1YcKES8x6C5Xm2M2qHpgkObnuDAe_5DdUPtMfS6Kl5Nnl6XjkzMKhdTVJlmLipqSYYRYhk8EcuAqsUHKTqyPmqT3Yt6dfqpltLiGgpgL5QnvfcBNTDEprciQuLgglg1G9bpmHsavaqa5HB1fBdFvKNo2aKsnbcWuto9_6NOCxnfenCXEGUwgHfCpwOY55Qz_BuvMEY3HkpW_UUc5e4P1cghIaSh6EjVYlf6clXPP59Rq6VB15x0hNuaCJLRnieZLIm5mMIN8W26jTpcJjEkZZp8ofUN_hnT0vFbAY-HPAVX8M9YsACUXLzFkFeQ7L4Rhujny-lMD7ggSZgp0p0DmrLbHvlhy9AUrq3f0Vd3dbPo4sRuR-6j4f63bHUkuxr0futh6lOjv1via-kHQIiQnLwl_tJIHrEpRYC55hmuFgkw75_39OlBhGNa_HmT4vPk1i4RWY7gZX3RUPWQDRTOoj-1GjRtJuZdX4WcIgalOtl0qGhO-uzNLeps6pYb285Y1VFPqiBhg7IwUspJhlyvL5gN00xE2rrVW7YyFhfAvEOZtSkSSC1xn_iqrH-wn0hwIH-RYvcmT7Re4ypdU8UTImIMxgU1DA09Sfxstz_GStyuYD95btPBu9sd3TJh8TgGYhvJNP1y_-s3lDEcya59k3Dq35y2-1xP3NfTWopAaIsI6Vc4XHcHd5X7LMI2RzIYtGkYWV8=s240-p-k-rw-no",
      descripcion: "Especialista en metodologías didácticas para la enseñanza de literatura. Creador de estrategias pedagógicas innovadoras.",
      temas: ["Didáctica", "Metodologías", "Estrategias Pedagógicas"],
      color: "from-teal-400 to-blue-400",
      redes: {
        instagram: "@roberto.didactica",
        facebook: "Roberto Silva Educación",
        email: "roberto.silva@edu.pe"
      }
    },
    {
      nombre: "Wilfredo Jeovanny Aponte Apontes",
      especialidad: "Didáctica Literaria",
      ensayos: 4,
      foto: "https://lh3.googleusercontent.com/a-/ALV-UjU8rj1volcU8ClIM8Jnhs_MdZ9uHHX_yXfL2zVjv1UzYF2rRv5qEmm4vcCdl-9rr5f02iAIUFN32KVehFpONo31a0Q7IIcu-W1xe8gbbj1o8NvAeu9016Lodkr7NeOm2aGVhAT5YturgpdsoMYzuICozEn2b5qJO2cVxeXosmyLRxKTJskhmeoGpqyqfv5ng6XJdt0io4sIu02-YTbCWAx--Hr_XHYx1kT8H8FKQg9n8ueAj3XY1FAQDj46cjA0DbX4W2bgF2QBpgjIL1TlTCP9aeoSiuhetnw2Ug--QQ3Yx433sgeSULZj8udwwdW5DhFFJHKLQjJNDfoDC-t47K54iIRucyVtWyphVAGLfgdpXmn62tRaHfoFiYqCbGDARn1PdpNw7GETO1sXTxG-_0_lACzU4bCXJFMLfuhYViEDH2w2ECIGWLLDXRRA588uzKAA_Bo9oHsFTE5cxn4xHYE7VrBZewwcbUgnhZRxO5NXLVxTiIu5sR6J7w-GFrYGtT_b9g0-CaW_9nu_IjuLaEnUQt8YjDGd2dLfJOBlN7t2wrkloW-6VYRew3-_ZDzgRIN7X_3VcoH-WKU4G6XOLKM3HxWvnrP_Rq9XOdLbROkVQu_mqcj9jMeGOaHcgsaA3Jes-4tHAtRchnKpY0odk1AtooGhdMYFmnyniKqIdWUyZ0XQy_XLdcpvPNdyPwp12UaYXi-BgaYTgPq7Qa0ZHbfdCFpWVyT_E3ZV2Yd0cpdJ4ZGvZI7m0sgPAtmLwLeYIPqheNfU-QZdcSKLQybJLzkPhxeZf1-0N-W_RelR2tlW06bezpP3vIlwFGP7JDcRP2AP3XJ7XLsoArsMYXD75EewEAib1DhdFcEUGo9ecPKF-WOvfps6MtoCqSMbfNQOFz8TFzFeGojGqjt-2HhZy1FOPXBzuohddsR2-60f3YXMPyRv0SheZaVegRbyJDCIpK6Tt1WTi-1i02ctuv-iWLoL-xCTULQ=s240-p-k-rw-no",
      descripcion: "Especialista en metodologías didácticas para la enseñanza de literatura. Creador de estrategias pedagógicas innovadoras.",
      temas: ["Didáctica", "Metodologías", "Estrategias Pedagógicas"],
      color: "from-teal-400 to-blue-400",
      redes: {
        instagram: "@roberto.didactica",
        facebook: "Roberto Silva Educación",
        email: "roberto.silva@edu.pe"
      }
    }
  ];