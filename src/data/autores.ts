export interface Autor {
    nombre: string;
    especialidad: string;
    ensayos: number;
    foto: string;
    descripcion: string;
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
      especialidad: "Crítica literaria",
      ensayos: 1,
      foto: "https://lh3.googleusercontent.com/a-/ALV-UjVpgKV6TBwZeGBhp9OgewrhH02nikq1NWGuqLjzBDJaVinHZW1QTl12eV_c1CSsEtJ1YgI3kx3nsM2yJQNgJH0IvKIYq6HCkMBeaEnJl0JNmsUsjVZeTUQbdLBv9R62AaDZ_Gk9CRxnZaN7U0lzJiXzjRjAt0PKIRM7xsV5shruJXoQ_ndElUDk7Xy_qEyTpK-58GqHqG-rPhdqhL8PSe6d35IfzIEmRgNcwQGJSsf0TNf7PHWOeJIOWJQSVAl7udUeo_OxTAYKmKTB4e1OnrTDnEu3isMOd07H1KEpNpOJOHQZWzMTtfzIQjSXsAZ0VE0VGbKrvxudzG8qua7kOZ2YCWykkfdEGZOXO_5aGQwOMLKllV5wD4ELp1AC1k7KW3MeVM6hjX6UgmWkYWDi37S9u6HBYnYPqsC31IldxWx4sKyAVUomua7_I5F2AmaACGqFksY7arRFrkvKmhOrZ-U48BIoLT3cYvDnB3tJLwchg7wxpvxne3MmesblEIkFbsQ765e-WJtCNSOi-dKvZOEJZkdzOGtYVmMwUZFuSu2ffzQtjbP2Pvg3sp2vPuWgWAlv8c2oOJcJDXMBEB1KvfDHseLjrwZuEN0xj41O44_xNf6_zX-fPmuK_uPiP7LOXq7XYvRz6VxlafcfpAvkJwJj5IDdblSV6SXAuB3TrUm8ulWJPH791EiY5v2boFpmJGMlpuVphjp2VTMXfhrNQwULncwFJWRKXSd7A-12KoQKGvh9ERyh0VUbcwsfrznyScsqcw7NEbXoY3IlEczBiwRto8FdGu7cn9T1GWwMw0UmPsdvZjt9rreshZbk5PaWeTWKiDr6eNEUInHrmrSEtq-6NcvfGLLb8_bkJYZIOPRhQvh1n66VuSea4JiW7syX5BGHiKPK17OPjc75GlXcxGKrHJGbAd_HLUrfgfTCQcQN9BXPeNkRLUSQdOeJbtzwfuV7Xg08GE970GalEkR8gRd70B3v8vXQ0g=s240-p-k-rw-no",
      descripcion: "Estudiante de 6to Ciclo de Literatura.",
      color: "from-purple-400 to-pink-400",
      redes: {
        instagram: "@bitacoraliteraria04",
        facebook: "profile.php?id=100010058592563",
        email: "maria.moscol@unl.edu.ec"
      }
    },
    {
      nombre: "Abigail Salomé Arias León",
      especialidad: "Crítica Literaria",
      ensayos: 1,
      foto: "https://lh3.googleusercontent.com/a-/ALV-UjWUyKqV-IjAs_UHsdb7Ukz_lBkBtUpNl3px9WfJNao_A5L8Auh_twR9oneFxwjIB1JdiCAqPM9c169kPIkXl3T5hNphwDvKU80d14LKy7wjaFdcZQ87pVu9Djki9e1QOE3UPy1vRSKkc5miLwzILTjCD7kEv10F_0ppQaGmz-QARgS2jm55YRPwtXot3oqBr41WbgKyzDd-X8COP7mlf-CAcXZxTZhr1lyf5ILWK6GQEG4fje17w8lrN2w7Ddyb2CjAKve60QVW2782JUUX9LJgxapjWsF6bYA8lW4E_diezhYl_o3nTNa8iQjGmZXAL4jeGAEW2xyf_RR3nayDb0kgVNZ0Ny7E3IMd0-7HqMETk2XzWHSxObwbfCQ8nCej06FGpYDz2BZgQ8JpSdXrOcJjg0W0P-MXzgjpLO_v_ll5U0puziPls5r-1JxFIHun-dEm_PYYI_CNSiYe8I-7QA76lASydPwPxjDUpP-A-5fiUK4Xis1NTtNL_blKmZq0FOen5XsONkuNkuDblG8oWwRzRfHhhcfgjiFcPO_irnUAdy4xbaUVVMgY0k5r1FKLwA-IibBsV-jbgovbYJ7VnebDrpsCTmk1QLHpJvCWAYA3-DkdPA8VLSyAOLT84Z3BOfgmNGw7OIdrigsUhmUwvX8OTxA1PKVjUQR1PtGERsydOxkizSTTlcgu2g0w73lFCWz8ueKlDnsBABBCNh5VQ1pNy-eRB1-ebywhZLrPZahmPlpJJDmcyIB7xBxIOITaupBtDemDktNTYAB7aIxixPV389qRGm6Lcdr3hQYWEsGaugj-jUmvtipfWOECaA7vA1P-FUIR7MJYK24dqahm4fkt60JodZbuE1yrWW6X9k_pn7SiJgwImYs3A7YRPn4ZhI7aGyFeALp4zyk7jWEHQe4qeh_FvbpTPUZjak6DkQ19_sR-33sQCAw8XgDCpyOA6kf7izDVvkD5KFLiSKQQuPL3ZRDSZqyzSQ=s240-p-k-rw-no",
      descripcion: "Estudiante de 6to Ciclo de Literatura",
      color: "from-blue-400 to-cyan-400",
      redes: {
        instagram: "@bitacoraliteraria04",
        facebook: "Abigail Salomé Arias León",
        email: "abigail.arias@unl.edu.ec"
      }
    },
    {
      nombre: "Valeria Guadalupe Mallaguari Yaguana",
      especialidad: "Literatura Hispanoaméricana",
      ensayos: 1,
      foto: "https://lh3.googleusercontent.com/a-/ALV-UjVkMOzjHf8QNtN7E_7QxqmlCj_UBvRWTxCKRUDf3yX_KCU5M8zaKwf4_JhnpN51LiCtl5qfsMaY9pBBeVdu5VrKFXhKKaw-Hds9dfpOpnyqUpCEoW72xETXOz1OxwX7o6us5M7IQ4DXEacIEN9YPO3vkDOsRRZnMTxhBuwU78rMTae536aH51R2m7QTug_Z4SFVdn9hVVIYyNAoOdlXjEJehvkIVFU4cFb4VSuEWrmrs-9kJGDLhh76-UAgKhNd2t_Ald635PpMoAi3giZcLqDtWMXuhMwexb1uKIJ7JdCmv0W4Ic-NDaj_muAi3hMYX2xdDsF95QZLQCBVjC0i1Rm3_Xr4PHGthfSW5r94yAkbii2D4vIsFYqE3jBvx4NQsZHcno9FV4q2Jk4eGFT4NF3tXZvp-WrIerYw3YBNK0ZznJOcJa89U10m023Uk1R3rHM6tN44KUJdLeNBQ8zcER-Y9O0jMCaOJBEzIoM1nTdt9BLHnD67YGuh0CaPCLXACHDHNZ0tELWVmYIkWl4hsBI8YqECkTirvt2SmM3vlRziCLLqKkawROfgQf79IG3ZbWne4qqp6xxhSS5bX3TwkNDR1Fu8qr_O8j0X9ZvFvony8RIMaf9Tz57pfv9MSWlrElNsRmQ4uy7QNG6dYnuTw19RuDKpMVDyxhb0TlTM1Y8WCB3J4pYYUg0Q5Y-eKUjd8eVqrgEDPPhTzZ9alv-YBmv-WjWFMUcS9CUv5T2IBHut-Z2Q5Y8SCTMmjEZ814OM3IU4M816vzG5eNYAHjbs9CiZz2RAIzA8mA2AhzvssbC3JKmKbrjScpvLfLQ0-66_3VZUb-9YmZ_hg9dXTVJBlo4qndAMQsJA0tUN5fcNY1SkyT-bRy5-v0zA7KGRWC-8jDIjg8A30lLjFtTAQHTKLi_rIN2pizt96crh7sIioDdRMTNs0Ovk2-0Opwu0BgIQj5_0I4UyHYbRzskdWcmGwTMHrQKCutye=s240-p-k-rw-no",
      descripcion: "Estudiante de 5to Ciclo de Literatura",
      color: "from-blue-400 to-cyan-400",
      redes: {
        instagram: "@bitacoraliteraria04",
        facebook: "Valeria Guadalupe Mallaguari Yaguana",
        email: "valeria.mallaguari@unl.edu.ec"
      }
    },
    {
      nombre: "Miriam Liliana Alvarez Merino",
      especialidad: "Literatura Hispanoaméricana",
      ensayos: 2,
      foto: "https://lh3.googleusercontent.com/a-/ALV-UjV-5kqz7QyNe_O4ng7pqM1rtYSzkA3NU6gj8BjqURzG2-K0WhEI7oWP0hbuxTzKUDji5HMw8IRhlTz1RM9k09u4EVZ5zcNPMkeY3QG9DyBYMXEsn5LpdyGxqdxZl1DozgdWVBAAZBbav3DJq-bDVlNwmKO_3UqR5NctZcZkeWK49eT6Ar04JKKjAJ3NwfOdQFpnOofgbV9I_vLwZghlKguSE5iTyFEmrkV3Zq8uFboXBRQuvG2pRWxInLvLlFfWLoJURDp3LgR_pL-H7dhyTLtFVJg1JF0lrVGCT8KqU3bHBz6JRcNj7PLNME9Z5Ukj_H26Hhn787cgXMFUbpuPq4rQfMLJCm20DXgXiUaSkg0ajxIH-z03fAo6hByX_wiE1sAPZuoRXr34WEcwEzPULUigK32Knu_ZRI2jFJKdwVSSX7ECzme986txpUNFaE46XVNE1vRuTgXcZeRpAIvS8m0zUmSm0DlfRujPHvHz9CELqp5HyedZodDyrOibg25SjBa8mo57yuDo--dbcewZyNzE-38Dqjz8WuQ_fdzPITuvoxeoY7QRV-WxVtEuelIyDSBge-nfgh5I9DMumlC_wtpJUbgAHSOaYbBItNKN-SG4I7zpxKyIVK_sYwj9b5SKr_SMeNfpucbCocf_zbptoOXg1jqqpP90WcjfQxh65kdMn9v3dLk_oxrPr9V_h4kd1vzH2aoirFDjWaY3jkcI0wBp_t8ctADruhWrCu5F204t_RfkJNR0IS4e2szwSG7eNqUFBqLEOCD4vfnB3NvqFEhzPcCYa5gWsUEy7m2acknwSu_dPrrSDk1i4Wec5xks1Hd1lt2BhHH1cay47j_nxPIib7dKv3ZhuAVQOw1bt8mcsVDZszB0uMG8Ov7PzoWwIT7kZrJY9513ippFsMECXtdb4Ycm47Ur38WbOcxp8hnyloIzCo7Z2yoC-ZNq6jZO1MAlpgjvST3LLYE_LFrdYkvWA7QNnVQ=s240-p-k-rw-no",
      descripcion: "Estudiante de 5to Ciclo de Literatura. ",
      color: "from-green-400 to-emerald-400",
      redes: {
        instagram: "@bitacoraliteraria04",
        facebook: "Miriam Liliana Alvarez Merino",
        email: "miriam.alvarez@unl.edu.ec"
      }
    },
    {
      nombre: "Evelin Alexandra Leon Macas",
      especialidad: "Literatura Hispanoaméricana",
      ensayos: 1,
      foto: "https://lh3.googleusercontent.com/a-/ALV-UjV1iekwU20OTFa5ZWPIXHftM9FAhKJml4suXwvxqvWkuDVVUUhFexNRXuhbi2YkpMdheGUvKp_0JDDXU1RoD9eUDDpQpBqIRP00WxVUMES2wGav-0X8cgpA2Abc9HvLK09ekz6ExTzon-Rn2VP1atgXnOn_a2JwWL8GfQbZMZkQHxCE0n4DriFqzG7x8kXHHflEN1yT4FEsYSEAtLgVT1KWISlBIEWuxVuuiGkZ953_OE7SdCQ06H499uQNgSoaiB6k_Zcvo4RG8ifGutscS_pwof3x0pfg5qhGBJem0mJk7J__v2y09pFE_kcvJ475IupnALps280vULsxBs6z4enhDAwA5KWKS_Y4bN3LP4PzUhWsZR_m5fmbxxOTyA7dnx7GdnuG_6eWZx97x1Kp-XAESBMYy2KbuS16bpLrfB3491iNihcJ-PqoxzHs9AXBJ7mCNYMMLw-zWhMgoiDyw3gk9DgPal-KPEIRKxKS9e4IITRvaIMYES4conuoYL9mq_d1ph04VSdlIwy75VFZCtsBJu7OvD6hwYdp75IyBe00rkJAw7_2N-zycCq6A0wimbiAe4u8o0lqM_M5fsdVRX5zV_sMYAt3dSuRRT0MH2aan8DaF0eTeJfoeE-uEtOeX-qdtbh5Wud-29bLhKnD1mFU3QZwzm3tiS1-YzP0nV8Y2g58Oc9r6o1xl7zIz_umluCfIs5ghF1ZlATSwzrzM8lm3ZoT3KmOBOJEjm-onWkvz-4YMknYQj9jyXxKX6yNMzXWgkzpjdL6xfZKhkoLolsSJWdRl2Ah4z1PA5HdgjcRposiaebgSUg3lshQo7l2VLrxpPQxNv3D2lT3SqAmZ9mEWmJAW4Exf3Fe1kmVd3KB9j-X8YUpDUB2aLojn-7-JCtYnxoXDVKVxbPwzL-4n_tykHyVXhEkAAycGLpo2PK2CVWBm0zPbuMzH23onMoznna_mzcQwLQfOwXwSV3KsJambUOVmRV01g=s240-p-k-rw-no",
      descripcion: "Estudiante de 5to Ciclo de Literatura. ",
      color: "from-orange-400 to-red-400",
      redes: {
        instagram: "@bitacoraliteraria04",
        facebook: "Evelin Alexandra Leon Macas",
        email: "evelin.leon@unl.edu.ec"
      }
    },
    {
      nombre: "Steven Gilbert Sarango",
      especialidad: "Literatura Hispanoaméricana",
      ensayos: 1,
      foto: "https://lh3.googleusercontent.com/a-/ALV-UjXv8GpFz9jS_utkhSyQwEEJ31iRchA7wGspNvi7gajutmjOSNz1gsJdeW8kqiSpSIQEaNABaR3kTxD36coLRk0wWZ5DLAl3JKumuZAHvVkaU7QN2BDuWo3Se5ZArBe5C0hVz3mW0hY6mX_-fTpyvtRsM--rOaDfwH1fJlr0M58W2wuQxDR_tCD4j4t-IaAbcCO-5xZ8kq_aaO_VsPuJg7bnqGi7E-vZYdqJVBocUW86n2x8pcAve2q0GnmSa6-vcX8FGYjk_2bE6ctEFWbpuAdq4yLz2yeSMdwzJjR8-oyu8HXkDvTSkAznpRzxMAs1YONXQad_DVO3sj5262cbfH2g0wC0PGGFrlYeJuuB3RHFPp-0DNfDyrCzMGT88qt56eKxQVaBsWzOePDFIVOmFfnmOm5hLMPSnv72Leg1vHqUCgmMOJwRkyZ1u02uO2RiPm9ZTMvPC312JKvTHyFmJA5-BanLwFJzR3aGyupfPjnuuE3T8bmHMOFvSj9e3hR819UltoeM9HimUmrtUhYEAB4e6tPH1yHv5uhgq9jt883DpO0Ar9ocSRZYV1e_ixUH7ZdqpzSYKyEjE8So9Z-HpZv44T9y15JOi8HWFycYYXbrJtVXNd37T4lQvWpBBqyie4jr0JNq5CVJfUsqyzJR_CBt4tAcqHgDH6x_i1SA48UdRMUPhWJeWWCvy_mpCqZDwEqjRC0WR5FUufv9napJEAz02cq5XrVfgHBN7KAId8IDBwgH_nrsvpaZublCcBDfJjTQTqBY6L4bqN0k48k_CJ9YAPy9Q2Kk1u_3KXvGn7Gry3ZzSZQ4EOVbBKARW_6bsnAEBQ_1CYfqV0sLN6XpMSbJnMUQbezUqWF1GDGe4ddXDp8MT0kynhU-9G0421iLfzjnPnhk-FMPMJWy6K98w2Iay2SPOf-BiHXSRUqtAfRt_y1vX3wdsDps9JNdUzqkBNpLwTqGyhgGjIh4rq-e9cpKGw-nbmXbSA=s240-p-k-rw-no",
      descripcion: "Estudiante de 5to Ciclo de Literatura. ",
      color: "from-indigo-400 to-purple-400",
      redes: {
        instagram: "@bitacoraliteraria04",
        facebook: "Steven Gilbert Sarango",
        email: "steven.gilbert@unl.edu.ec"
      }
    },
    {
      nombre: "Yanela Elizabeth Armijos Chamba",
      especialidad: "Literatura Hispanoaméricana",
      ensayos: 1,
      foto: "https://lh3.googleusercontent.com/a-/ALV-UjV_rKISa_WR6SzhIDDdEoQtdc01ktiOWzBSxKI3ScXrMh1BTAHchS6ltyduBrYf0BQMLXgqBO7qB57P5dDdbxZ-S8xDBBLRPIosKsWwFjksrC2rnzQYNZ0Yf0PXGRB83tJa-LGBT_fUdA-QWeBY4ABoVRLMH5W8ug09dkG_LRvDkyjhgFUKS12RYKgAZdJBbrhE0XfH4GNcOB-MHZTQ-iXSEX0IdjMjMEhESyLanzWHjj1aJtBLMoY9y787fjkZwZiqKxBD9XgERJW6uqggaD1SF1YcKES8x6C5Xm2M2qHpgkObnuDAe_5DdUPtMfS6Kl5Nnl6XjkzMKhdTVJlmLipqSYYRYhk8EcuAqsUHKTqyPmqT3Yt6dfqpltLiGgpgL5QnvfcBNTDEprciQuLgglg1G9bpmHsavaqa5HB1fBdFvKNo2aKsnbcWuto9_6NOCxnfenCXEGUwgHfCpwOY55Qz_BuvMEY3HkpW_UUc5e4P1cghIaSh6EjVYlf6clXPP59Rq6VB15x0hNuaCJLRnieZLIm5mMIN8W26jTpcJjEkZZp8ofUN_hnT0vFbAY-HPAVX8M9YsACUXLzFkFeQ7L4Rhujny-lMD7ggSZgp0p0DmrLbHvlhy9AUrq3f0Vd3dbPo4sRuR-6j4f63bHUkuxr0futh6lOjv1via-kHQIiQnLwl_tJIHrEpRYC55hmuFgkw75_39OlBhGNa_HmT4vPk1i4RWY7gZX3RUPWQDRTOoj-1GjRtJuZdX4WcIgalOtl0qGhO-uzNLeps6pYb285Y1VFPqiBhg7IwUspJhlyvL5gN00xE2rrVW7YyFhfAvEOZtSkSSC1xn_iqrH-wn0hwIH-RYvcmT7Re4ypdU8UTImIMxgU1DA09Sfxstz_GStyuYD95btPBu9sd3TJh8TgGYhvJNP1y_-s3lDEcya59k3Dq35y2-1xP3NfTWopAaIsI6Vc4XHcHd5X7LMI2RzIYtGkYWV8=s240-p-k-rw-no",
      descripcion: "Estudiante de 5to Ciclo de Literatura. ",
      color: "from-teal-400 to-blue-400",
      redes: {
        instagram: "@bitacoraliteraria04",
        facebook: "Yanela Elizabeth Armijos Chamba",
        email: "yanela.armijos@unl.edu.ec"
      }
    },
    {
      nombre: "Wilfredo Jeovanny Aponte Apontes",
      especialidad: "Literatura Hispanoaméricana",
      ensayos: 1,
      foto: "https://lh3.googleusercontent.com/a-/ALV-UjU8rj1volcU8ClIM8Jnhs_MdZ9uHHX_yXfL2zVjv1UzYF2rRv5qEmm4vcCdl-9rr5f02iAIUFN32KVehFpONo31a0Q7IIcu-W1xe8gbbj1o8NvAeu9016Lodkr7NeOm2aGVhAT5YturgpdsoMYzuICozEn2b5qJO2cVxeXosmyLRxKTJskhmeoGpqyqfv5ng6XJdt0io4sIu02-YTbCWAx--Hr_XHYx1kT8H8FKQg9n8ueAj3XY1FAQDj46cjA0DbX4W2bgF2QBpgjIL1TlTCP9aeoSiuhetnw2Ug--QQ3Yx433sgeSULZj8udwwdW5DhFFJHKLQjJNDfoDC-t47K54iIRucyVtWyphVAGLfgdpXmn62tRaHfoFiYqCbGDARn1PdpNw7GETO1sXTxG-_0_lACzU4bCXJFMLfuhYViEDH2w2ECIGWLLDXRRA588uzKAA_Bo9oHsFTE5cxn4xHYE7VrBZewwcbUgnhZRxO5NXLVxTiIu5sR6J7w-GFrYGtT_b9g0-CaW_9nu_IjuLaEnUQt8YjDGd2dLfJOBlN7t2wrkloW-6VYRew3-_ZDzgRIN7X_3VcoH-WKU4G6XOLKM3HxWvnrP_Rq9XOdLbROkVQu_mqcj9jMeGOaHcgsaA3Jes-4tHAtRchnKpY0odk1AtooGhdMYFmnyniKqIdWUyZ0XQy_XLdcpvPNdyPwp12UaYXi-BgaYTgPq7Qa0ZHbfdCFpWVyT_E3ZV2Yd0cpdJ4ZGvZI7m0sgPAtmLwLeYIPqheNfU-QZdcSKLQybJLzkPhxeZf1-0N-W_RelR2tlW06bezpP3vIlwFGP7JDcRP2AP3XJ7XLsoArsMYXD75EewEAib1DhdFcEUGo9ecPKF-WOvfps6MtoCqSMbfNQOFz8TFzFeGojGqjt-2HhZy1FOPXBzuohddsR2-60f3YXMPyRv0SheZaVegRbyJDCIpK6Tt1WTi-1i02ctuv-iWLoL-xCTULQ=s240-p-k-rw-no",
      descripcion: "Estudiante de 5to Ciclo de Literatura. ",
      color: "from-cyan-400 to-green-400",
      redes: {
        instagram: "@bitacoraliteraria04",
        facebook: "Wilfredo Jeovanny Aponte Apontes",
        email: "wilfredo.aponte@edu.pe"
      }
    },
    {
      nombre: "Patricia Janeth Alvarez Jimenez",
      especialidad: "Literatura Hispanoaméricana",
      ensayos: 1,
      foto: "https://lh3.googleusercontent.com/a-/ALV-UjVGfiGeilaV5GbwtpuHX0uiO3UADHwnnC1iffUF8mBgpDETcNXu60wMzJixDG3ywLEVBFE1QYq_zvlvKAQGfTolvCkNxVK53jteJ5Oto5IrA83Q1is9H-lsQquZtxtoL8inRkJGn4nvsIWmReTT1HB-o5XFgXwPNTpbvxvCzA_Jpy45gUoAFW8Loq2OE19WaD5Booau0Nfjz3zwNhLO1uMKweeAWHaYxNR2Nm5l91rKKwe8_v0v0SnhnDDzx5EoyoCthL2M9SWFPyV8Qc3k8fl53SqobshlTwNYnxZSbe5g7_lUF_KzzvM7Hf1XoW4yLZuButFj8Q_jfgV0MxB8kRorD7V3wfn3LuPPGKP63CrCiOY2djRgjS3LDWytuRnICOXazUT0SFdhy3PgAglzk4Efw-RjAoh_4fJ1Gc1-alE1g_J0bJln9clHil9Dl8CLDMwFC3qGeXZAnuIGhYixygczKb0DPl9u0xsQO3cARUcPCjtEwjyjVFU4-6PCm2EQA1ToUicGv42Ut5_CXDG-P4yvWB1iq6rZxrQTg_b2XATqNMN8bjf5A7lcM0GDzpFYLxXteIJ_ZOtLh2x3Heih8xbyJcdzbiGaUi3SJnU18hsh08U7CZBwdYI7u4fB0PtvPtdfJ8x18FvY4qqyOuiG2kp8nQJXUoDa9huzf5whO09RhXQ8Te8JB1HLoIkfPnE5u7SSpCmFiSpwKT3y1_ndBMy22nSIw5wsVvGtnKTZMSExTEjMjk40fqbWCWwl2xsbCV53B0z6_iP72QgO9uVlvRplq0LZQYncW--aWNK_6rFekWrN8aZ3fXCvk1i8nZ-5YuoDknAtgtj9CiE7-iFU12QxFvYGpQLZSh6CipzoWtIIfgIaRG1j07RwU9fHu9YCLgBjk4PnUUt_ow7iAOBNEqz6LkB8TjBlpHU8_dOQCR5EU-4SAOJ8WIjy8G_1ch4a2RclfLX2dqt38MrteHuPTv0WJsTkWUuLAQ=s240-p-k-rw-no",
      descripcion: "Estudiante de 5to Ciclo de Literatura. ",
      color: "from-teal-400 to-blue-400",
      redes: {
        instagram: "@bitacoraliteraria04",
        facebook: "Patricia Janeth Alvarez Jimenez",
        email: "patricia.alvarez@unl.edu.ec"
      }
    },
    {
      nombre: "Aracely Jamile Chamba Riofrio",
      especialidad: "Literatura Hispanoaméricana",
      ensayos: 1,
      foto: "https://lh3.googleusercontent.com/a-/ALV-UjXRgiCOFxDdS_flKagFze91t8Wcf8N0xiXYc278u26-CI2vo8K6XhikLFkaWHP_zPSwfVRW2yzM-CzImmsRrrCfxgTuFLhAj5x7frfsLQxD922pUIytRjk4I62kgj0c2EgqtgdKdDazWLAPopwF1kjsJgw8ujOPg-M29cgqS8WR6IzQI1vOihXay60jZybJRtChIHgW7o-PUMEmwsbKQrCNjr5T4H5apYcbbaxnAaNDwbFOMaPhqAzE30yf4JPzhbfgitPcspV71DqwVsU-bdazpc46EphZ9TsYrdVB7aYoqZwoiNHbM5fCKFJ0MEheTpPtkeYb1-BRRa_Ev5TxeW1eB-3wELTu_tPDan6UMC7n6Qq_tHVb7VSmCECAS-xZ93aLCxQkYFBIgCvf1CC3KbCUAlvxEgYI2JOo-8KeBC-hwiXlR_KD2YwQF7eA4zIB56k3CTbLkKADttFBXiOV9YMM7q17lm4cOulQBNxDNVghAr4SXY9tbGVl5SHXhswY9QgU43RnlMaXj8ZZMessOz2vOks2v_t2jhGFNI8Z40C_l7hfztNUCAaYCAf2kOU1AVOobrltvZAEZIUdtfSuDAAjHM4PRL-UlFzzN47QZrBU64o27F49K6aDnMxmjB-lkyN30REDGzRkedlTzcbWJfycuXsnBTyEs4hO4iWE1_9vth1Nf-FaAI1n7NwdeTXLg7cWpvZei9zGHVqUmdvsWHsVbfMSBVkCT0NNnmJ_otmp3WsTQ6_G9JQ0pPU0xG3AYm4RPwnOGJs1zGiVtashmkZXyDETSQhLqL6Tu_S6t75ZPUGt3kCyDFABW0xbU9k3f83Lws2Lfwnfr2X-QRkEYgX45xuOUUJmiCWSEKqFbCQb3J9TGLYH0xNo_6JqS7pkQRrSXAcaYYCIVqn10nYyBph6g1cno4pV5Z6IWeoi3QPuSv3UfXucUkpkcjDMxvubxSZ5TLqqSJfzctuMZzTvyCdIRzRYpY7D=s240-p-k-rw-no",
      descripcion: "Estudiante de 6to Ciclo de Literatura. ",
      color: "from-orange-400 to-blue-400",
      redes: {
        instagram: "@bitacoraliteraria04",
        facebook: "Aracely Jamile Chamba Riofrio",
        email: "aracely.chamba@unl.edu.ec"
      }
    },
    {
      nombre: "Luisa Milena Parra Chalan",
      especialidad: "Literatura Hispanoaméricana",
      ensayos: 1,
      foto: "https://lh3.googleusercontent.com/a-/ALV-UjVrVXpgDD4KWCayFLVxP_g_Zp3nBLtm801gt5YZhihRDtzX1BR0l-HbrRjcgBkQK9WI4LFjpm0qPXm1C8Yj79T7qToJl07Ys-TlqJrkLLUt7-Sucp782KrgBZ2sZ-yTtrdbDUazIdndYyLhuT-FWNLcWOnHKy7fnSYfqxjP_m0nXtda33uG94e5RvlxE0MVdKI72mz39wCibqPzq1UWop7Cc4lvjDkNqmbFFjPm9oxoWk7b1aMBf8EQbdJQkOHqBcDL3TC8O8X-_wwb3z5LO67BklpTWIFXf2PljOQos-P1On4z_GkM9CRWm6eMUewjfyiq6VH9_L2Qzxfq_0Tv-T5ipu7aVqWP2dK7Z6GYxQRvhwDH6U28Pp4CKHJroshtcLikRI66IdiF5ClHR6oFyvVxWqXPDhGtRo3vtRYfZkPD5taPcVqtW1x8RNZF7MdEvai3zPA20QfxSAiFoZAK1d3wOdU2CbLQxAMOIica8POlpQGzO51H6IsV_XbwNXXqEsajPwggW380cFRAvVdKEEr4-Keka8TVD7gXqqMDXKahCG0ZptCvwCEgSeObNSIvYk3NPLMa4cfBZXq4JFHfjnx4_zMg6a3w1YaMSeeC6qKhFwf79wRn8uZvr55KniSDArowdK-hFo4K11wLrnSGmRBNyOdev56YNQD58Epsoh2gmKlccbX8fXVDUcDC2nLWjICM2XiJw-bvsgX0sSPfOBbmAsh1Iyf5nHfqut3KKAXV7MxFSEl436Nq0zqE-yOGcxfzMcuuhCZp_njKzdhSSP7oXh9w6vj0Gz3WMp8GiJLJ8x7rZfeGjwx1gX7hPPEbXDgqS-sR_rFDd3_WaybKeDv2-8KUFiv7jMDaRspwcZN79nlDhEnUIIsLMRk8iQXWz8I3dfJRFbO_508jotwZmx447zM5R33zw7b-2Fgf-_aMkg0wmXKXe24b4HWv0LyY5CDZ6wxlGj0CQb5ZVzB0okOy3EWFLv0=s240-p-k-rw-no",
      descripcion: "Estudiante de 6to Ciclo de Literatura. ",
      color: "from-teal-400 to-gray-400",
      redes: {
        instagram: "@bitacoraliteraria04",
        facebook: "Luisa Milena Parra Chalan",
        email: "luisa.parra@unl.edu.ec"
      }
    },
    {
      nombre: "Astrid Carolina Jumbo Campoverde",
      especialidad: "Literatura Hispanoaméricana",
      ensayos: 1,
      foto: "https://lh3.googleusercontent.com/a-/ALV-UjUJkJEGnj82DzvhOx81J2eZWPhyInwVfbntSRYnIx0NQTzeEeYlTqa5jNKMnvJ5BxV4rFGXmCZvQjF8tVMDbPBnquiXJmy3n0LDoIJ0FOHt6SJJgWLa1r2NoFLz1fb2EmsORJ4D6AuKXTsAe5ZhoEcpVX1ZDoaHX8J4kq_-tM6EpzITMgwI_f8PZQTwHXJrdQdFFMyfvU79YW-qpF9nt_1Ti7l5hnlmNI3iKuBHBXI1fEuq-vUuRqEFTQCKVnMBv2y-bB_5dXnLpaAbxsftEF_D7hCMtTDEZBlqDEgZjGMYl50EUPBP-mYe_s4SxKN8bih-AcYFMq-_rfy3Ok-viBZ_18hxyQVoxoX-khSbK1V5TWBdUO7Wbmg02A6Fki6oE6VxjCpVcPfIkAYpCrKUQRzIdFhWhwb7S5EgRgAaVa_s1iXHXDfm5RHsBuTW_-SZQkMa-mgrSvc6wQqRAvmajlbub-L1g0NqiEccEY9tETsFvNHoXvb1hG-Xr2EfBrCcaD3AJjGUDs5BIm06dTDTEFfcOW4rXvl-6eY0uI71E6yVSmRA2wx5Loeygi-qSMPx7wSjlvY1QJo4JwAZWczvb_gUWeJ7o6jVtZ4uq2rVss2nYcbCdQ9cl7Kt6WDKUra_xp6hh5hIILWjIWtNcTsOc40CJZRwtKd1AGmBWOXc_MiEbLbZhVq6MIUYs_-tewm8e7RL7k2VLPnrQdR9u5BCKhx_nBvB9tqQq9EjnCyLh0CrlaArD3yMEPobm_c5XFmV40mg52xlQvtaZI9InzO-ALaJ2AHfpNq2klAzcu076USqX13iUVy2EU1ji1JtkJxldSPfq8MmcMVcD2uCWKeSMIf-k_hEZQ0d7B9hKu3XvYeS74ptNsV5HxvUDjwHy5B8_91NCOmo8igiJItoVTVLuAg9JyfAaAcSWC9AmktlgqrZaChxpQ4SP-0OaowEs_YQwb_RlMiuDb3rvS1WoEREVZKC5on7nw=s240-p-k-rw-no",
      descripcion: "Estudiante de 6to Ciclo de Literatura. ",
      color: "from-red-400 to-blue-800",
      redes: {
        instagram: "@bitacoraliteraria04",
        facebook: "Astrid Carolina Jumbo Campoverde",
        email: "astrid.jumbo@unl.edu.ec"
      }
    },
    {
      nombre: "Fredy Alexander Sanchez Zapata",
      especialidad: "Literatura Hispanoaméricana",
      ensayos: 1,
      foto: "https://lh3.googleusercontent.com/a-/ALV-UjUkfE0PIx7BX_5KoCWUiN7jG2h9tC3T1_Ss1BDxocySY--YYwvxi7hOR7H1wChr1tlcX_QUHaa9ROn8EPgqhCKQR_versKc4ySLjb-ouJrPrNOJ9omxwLxXFnELJCxQkIgRQrUZ7efmFkTg5fB5X0eSTByAPkLSoH5Joq_ucekBgf-IGl1IBrE32XcRewSFSZ9pN1hReYT2CjF8CzrEj2sSqekC-T6pK-3vKgsosTK193g4oE60CETdQvLJZV58FvvIuzsQANAVVKwbdZoOeRhS0PL8YqTcfMgbF9jFdvnbuu1TxJAIKwT92EhrFCwflFpMnJjBQ7jAVdmaWZLTXyfyVfum4u7oLIOVsvTNaN1ZcyBZzZgKZXtuqUtPEl-ZpFGtKUCBldR7MvEdYn6qQXI9tA1K6sl2edLePbvQY_qQ5CFsU0B5-j0nLOFRTfWF3YRY9iV6TuYfCkbmfhOWdnX9gKou-WUAo_UDP1QQ2XGVJK2grHOv_6ibGA2TPSNXs6rjRpVjnpu7hcNJI6uxK6cnJyV5HFX6JJNtd3EUPrHlCZ_bLdqayRjb5rKwBLcf3dqdl4t-VFJUGuti2XqLew7z6hmwrsdNWLfSlsBICakg8I0c1leA0fawPa22pNvgOrYT8LAD2wb5OqST5nz3iYc7bYkiSYCc7OGhykvaFmsiXW6fBaFnmUFbvfMe3TD3THsReLmypj8a3G8H9_MvLQ44XA_GA5qJo0Ig-l1iIjXouGDlQZqaBVx9CsH1BohxhAgMU-Q-3ZprfVh5Qxm8VUdPb4GOTdRFmbegQWvN_kPYNAcCeJJM-w9cAbWdHjf2yNhDJ6E5M0aBwnBSNbZSwuiu3yO6wL4gTNr1DXy4o8IZA8jrVCxyz4Kx13PImudHJyNpxBdn-M8xcnafGMGgyD2-DeAeKEO-hsESAkw8K2bVonpeqN7ukANowr_VmRS8LSzR-LFXhIczL25F8NX4yd4Ubwkb-g=s240-p-k-rw-no",
      descripcion: "Estudiante de 6to Ciclo de Literatura. ",
      color: "from-teal-400 to-red-400",
      redes: {
        instagram: "@bitacoraliteraria04",
        facebook: "Fredy Alexander Sanchez Zapata",
        email: "fredy.sanchez@unl.edu.ec"
      }
    },
    {
      nombre: "Andrea Veronica Carrion Miles",
      especialidad: "Literatura Hispanoaméricana",
      ensayos: 1,
      foto: "https://lh3.googleusercontent.com/a-/ALV-UjWtTgUTiJMsUlsmrodvtWv7LTyPP0PORsor6tKkKYcgQhv8Ua3hwvMdH_gv3EpgpjMGM8-nSa83SydKGWcYrxQxEnndhfb1OzXA_fwEtAu8COC97y5zwn2_gxTJ2j_KXfi1osUzKlK3y90JNFGie89JtG8G2vtN8Od0R-8ZKOMG0HdYuMhAqHQ5PNpIlLfdWS51Mt2B8RJYvaWbcIicgNqGyYxutQrwH5ZqmlGanwD_UG50gJaMpiHjnySItcKo8LcDRzDG4fF6xbcFf68HkBMjmOez1mk-ZGUbgJYubhEoCdbDtsikI5Fyh3YWzZ7yTJEzzfZbeY1VHIjPquhLJN3sACmLduzs0oU0MDzUcq7L-wL7Y9zZEcGGzjpGo_sFGAH5AzmD0NEy-sBF8-O5DWuowtV-6aglpO0sMvcRfw9gqpS-rbPxw8G5qoOsE5AGOXs_TtV40YfanPnMsc7Hx7jdhiiJt23YVYNwoD7Lgi_SBXpGhFOdvTBLGDfiT1o7c3gLk2jkzKHj79oCzo9lqmOsrEdGILxFKT4RT2ZrRRqT6VhNE6M6O8zYwvrQV4c_aWSCySYDlt0dZO7wYTUxLvs95JIKisVEMaRQXAC1-SMqFFuXxhpMRJtAWqUmPtxFQaYsQcqwgodqv_dqGcyw6FD7oH6PoJoTv6xQJkPBATc96-756KuB689fIhS0PwJ_6ztD-891ejYyS2V0MZdUtCkkd2PnSmXHh-h-OOmw3Sr-N5e7Yi44e6b62Cexoh64kMxPzK0j-SgMQ955iYKX0JtlgpTeiVqTZpAU-UDpf47xJJq2xkWmPHFIgG61vKj-kVnof0XOMt3_jt9iDA8JHjTad2DnjKWFrcMKSxfM4GQSAkR_VV-XPt29RQ3UjTCAQ7ggkEpzexasaJNgBDf4qAEy8R8Zyje6M72_Tg_CikmZDHA5BYZ_IJek2h0TLC5opp3G0xUiWjDXL1igQ0c4bPa_W08LIw=s240-p-k-rw-no",
      descripcion: "Estudiante de 6to Ciclo de Literatura. ",
      color: "from-pink-400 to-blue-400",
      redes: {
        instagram: "@bitacoraliteraria04",
        facebook: "Andrea Veronica Carrion Miles",
        email: "andrea.carrion@unl.edu.ec"
      }
    },
    {
      nombre: "Luis Alfonso Macas Jimenez",
      especialidad: "Literatura Hispanoaméricana",
      ensayos: 1,
      foto: "https://lh3.googleusercontent.com/a-/ALV-UjWslhkE85II4eyK_DtTiffh_diKgNio_to9dy0KVnwYbgxRCo1-bxE_O2nDPhhNbetIFhKn9Ce3AsSYNIaz2gSmuwRxHtTrVTQJUzC6LeMFZ-YPBGFutevn14NoTR_RLznI3b--QVN_T2MBHQewdAeZAxTXBzx043l_RxcmDMvv5wt0R5HXhiPlcPcSPGqkGYlbnp7D1V98yoUupV5_6eFgO8_df2FgLsKnH4D49dEJe14MY37SV36br6qC317XcAadv-z5dVV7iPDjAHlwA4ZGKEA5i-znWPOXwX02HuPP36zzix4FYlp3eM5j7FYVV3V1M2ADFugdWehoc6PHcN47RfvlJ6Q0tt1dvBOFJ8DMsiti5Wk5d4kr-YW_n6LIBwUWUaVXM9lwv81IJQoFJk2xVgsnY1ogu83GZMARxC9_vDQWFGOklkEUobs2DkWfvm-JAIuZp0LIQXh7qSPyztrkJOxHDOBXMzJUQBU2ivKGhy95S0YSXXLHXwgIHcW-fuvl35XVn9V8PbXfzDa2F4fBnvpj8mu0umVY21wgAYpSV3iIMC1wtFk7Fmgz3u4iypmzf2RzmTDdl1s4OGiwKWALzrxy8qW6kaRgWsMCGAM6EBwjvkERheNzsc-roZelUdvxI2Gk4Ts42Wv9oYtuYO4GqEivysUx7CMpsrPO2RoruB_7CpCV5xGPLzhzLVKO3FBAMSB0Jo7pQVT0A2aKQuOF9UeHEIMHKzZC_rGeX_gGcTM1ue7wf_CamKG8qicv1MhoLryQgRl1Y6kjOSn2Jh5a16CMis_r8_JrjnOAQEyI0LGiPobsgJeU7WYuo0xr57jORTu9lL460JE6AmrOOO2zigkuBiNyYo3wqsAYuY3Zn1J9D1WLwIRWqVjttzNSyDmj5iLbJsm9jz56wIJnqhT49skmpW8yqDwvlX8jwiOutV_yjYXvhfJWGDPlSYA-ojCDEzv_3kFShCp-LhBvk0_-BG_UflejJw=s240-p-k-rw-no",
      descripcion: "Estudiante de 6to Ciclo de Literatura. ",
      color: "from-sky-400 to-sky-400",
      redes: {
        instagram: "@bitacoraliteraria04",
        facebook: "Luis Alfonso Macas Jimenez",
        email: "luis.macas@unl.edu.ec"
      }
    },
    {
      nombre: "Mayuli Lizzeth Cueva Castillo",
      especialidad: "Literatura Hispanoaméricana",
      ensayos: 1,
      foto: "https://lh3.googleusercontent.com/a-/ALV-UjV8XXyq-I3B30gEdBFvS4yl5UHvyWs_ynJeqhHZux1eMgP9xhpj8CCsjfGvQUMwsKrNwXMxrgs438lCovPWCT4U3u94kJbKKY6zCKEQOBPz6UswoUbTRxqtnIJPgY131UbuQjjTGJagdlSe8yI0rnf7KEauwao8FmdFkHuzSjEWNlj2sEwLxr2M9anfVPasn4SvKYme0VunDFbaW7f1mUqHYlFrs42G-V3TxF4Zi5HX8Z_-3RBIfes1aNxxEflLa6H2RkHBRJ__21k1u2Y9OB18fQy2pBU72aH5HLStmF_oc1d_juQLC_W-LAKY8IS3HhDso-kFGk1ZSObTkLUnTkDQzaH7YflvbWZUVqeA1jGzHiyahNvNC_b1UrOtg3T-rzQFsk6GXA9D-BMNRSAfbBzOrqmsUfo9dCLsunHSZo-1ZRH1xVOFgdX-RDDus3KHcp3CP4vIALTa3m31_a2vtcALGoSxxXXS0uQU9ScUvJ0tldBtd1eo99qvQviVWhHOc5mUiNQjMiRfsFlAtwfH8Cqi2essPCmGj7auS2T1NVgahb0sCs-VEpKsUfd6iC2-dt6zfkkCiYzyH0M7NJ2jsosRRaMLVt9o5sGK-H7zv0gbakYPIsLu4LHARX7R0G0AkMHREYB-V2Zi-YD8AkNK2U8k4ie8uXc4EWzgzeFnGRZ7IRtndR4_pBwN49YKlRzaoySQa_xVOlvFaTbrISSKwro3ABR2rcj1Jn4FRxMvvbn1Yo-WzECcT2DHjPjLw8lwdKTFOH3fWNwz6T2mkkXaD0j4_nBKsVUnq7D5eUXNbaZzU86B_Nr4oF4OU_hrWnJejLKBkdWL1yxI6ZZ-8_ejnGoqHUyFFOcHbgGDOisaPhnuqFbBFBqSlWeQ4lt8XneCmedvehhderwsAJgzV2Blz9hsNShCkWG98Dug6GUIK3umif5VVlDInwFlnWichIsIwKxBO67fq-MX3-WR57bwj-HcWfpiUmM_=s240-p-k-rw-no",
      descripcion: "Estudiante de 6to Ciclo de Literatura. ",
      color: "from-orange-400 to-sky-400",
      redes: {
        instagram: "@bitacoraliteraria04",
        facebook: "Mayuli Lizzeth Cueva Castillo",
        email: "mayuli.cueva@unl.edu.ec"
      }
    },
    {
      nombre: "Daniela Anabel Tamayo Vicente",
      especialidad: "Literatura Hispanoaméricana",
      ensayos: 1,
      foto: "https://lh3.googleusercontent.com/a-/ALV-UjU977UCqxDElwaEUo8OHhsCtDfoOuHZ9EtOQ9YQz82SjcsOTspr1ewBOPBMu3eToh7AhQDArXFsyXNqMiRBGSzsIveDOiVIZXXPFc5Lw-JBfyUJzYUGDF9zi7I2JYDLpVGYL8aokfNOpG4H-JiKbisES2qTzDXYhBKAHnVe0-KnG9LAm6CplZQa501SNRmT8gQ1POamhL65u0sCnubD73X9r-mRqtQlhgQtMyhbfZ0x4tqH8LEY4s7hS597aQVkFqXr4y3tQemDb5rN6hakS3sZT6DRpGj0BBloFw1tL_h4U6b5q4b2isqU0jZkt-OhdI7gSligokNp6ZkGOegBLChgKGtxHVeNi2G8txcI6XF_e-SV6oDMvu5-XcVuxBO2HP45YALjAfHvYDkZOqh_FhP552ORF1QOfWw4wY8G1S9T6yy7GTmBepvXuXsABI-nLp6N59OCx9NvT_g4tcmueI-p3qXzjTy0iON-co1WoAcY6zc1HNl1yJliWvQqypjJi3R3i08ZIKLjyj78hFKOtFDZudAeQttd3xBDJUHefjcQ82M5iEXTiFy555pdQ66lGABGsG0--CWSCgRcxk4yQFKFCxDblcHc5TtlkwkKaMzVHm9Ef4BlhVmMnxFxu3kjYOfhJuwwaMEYUQyuci261Gpt1GuRKg6X42zDriw3fxldNDfx1j58BLptAZPLpWM0QGajF2lVpioraTPHoJ1gSEPPjq2z7OrCEwnQB5ZN2hr8UsHEofbDeyL-uKYgbEj_lgLd76CL0xf8oUVgF3SDnvxksFqBYK5z5YggalLPBreREsDtjI7jrJARufe5mGvl49rxkeZQUW6SJfT-HYjD_xkNbxwebwPS4c1qe3JklhKUxnBZVURhM-VADjGIe8Gh2vaKKPuLnlqY5RVsE5UFTfuehH0DN51AJK5jYvyOXpIKomnPFdR1uvL9p8Zu2ha-PX2hRmlzdOzf-ZRJbJLX_SMdYNBcA91PdA=s240-p-k-rw-no",
      descripcion: "Estudiante de 6to Ciclo de Literatura. ",
      color: "from-purple-400 to-blue-400",
      redes: {
        instagram: "@bitacoraliteraria04",
        facebook: "Daniela Anabel Tamayo Vicente",
        email: "daniela.tamayo@unl.edu.ec"
      }
    },
    {
      nombre: "Bryan Starman Lapo Jaramillo",
      especialidad: "Literatura Hispanoaméricana",
      ensayos: 1,
      foto: "https://lh3.googleusercontent.com/a-/ALV-UjX9H_1h5seMGztxhXivHhGi7lmzBoXSXV1nWunYhhT4Jo9eX7RHFUWEK946j-EnkIAnMK9FAJTzrK6wJ3NHZ6POVTKQSgQdW_WoaQTHrUxvrttpgv0wUF-GN9ddENsIK88hx8LDCgR7dtptmAzsPOrVKQU0k4XwawANpwlKPDLAQSkaZ1ZI45p3HOfAGUDQ4oHiPsKu_9OkKJTnZCZWCeiBNzdMBaGxH-7etxFIY1Xu6XCHVuDRQCDIktoOL79M_u_dOZ8xCPwtBjudiX4k4-tDKrHea07ORfp5Ncd8eE3VjfSc5E3QqmFoIttPCInwaKZW4YMY56rOK5cwEjbMEVRigqTSIV5oE58IGv1vpTcWFYkTvFshRQq_tV6WpDoyNftivkkY-8EOcUfnV_D_LxEvYeZOwAhPQRME33hJlTF3DrkTO1HmP8d_sTGi3Sw4QKsStpMfzrV-Ckfw8TBltYAozZS02hgNjAL_7o3GtAjk-WGx7Jp1_bYrj2X3zzzodcvIwmRLQi9MqeF50golZt0SR3C7juGPwfchqGCxAxKaupkbURDhPIwJPD6nJMnBaqqENxv_fTR1idHipjQrr0_jm_-6GCxyvR5WZKL26SIu2KV6TunUYkFkejm_KtOwiLYCIljkYupjCWGNPL7aFLlfSofldLPv1NaXTonibYWsgfDdNj8GUzhHkp5O8hCcUAmQ_8JYzWUZ_O1mb5j_8-SO_2YMJWdL8ChTZQL9LytnUsDfeZeUig6Xgec5DN9ll7qM80gm9GRuZ8zbjS2p6r3nWAoto6Ky0qUfJ3YxOs2DLiLaEnHHpsm34HKUbvlJJ37Jn9l5a8ycdTwMNW6jZWvMe9nVNczaVF5N9qtzayWMIEofzwGV_F6fMrSHolOt3GfJ63YcnEM6Kc5UiaOGJf_W6Qx0MY8D2ONsf-kAyjthpefH2JzapwwY_eROfiu-VBMnKy3VuHtlis8dmLmsLssbMthjqRSEsQ=s240-p-k-rw-no",
      descripcion: "Estudiante de 6to Ciclo de Literatura. ",
      color: "from-purple-900 to-purple-400",
      redes: {
        instagram: "@bitacoraliteraria04",
        facebook: "Bryan Starman Lapo Jaramillo",
        email: "bryan.lapo@unl.edu.ec"
      }
    },
    {
      nombre: "Hector Geovanny Cabrera Gonzalez",
      especialidad: "Literatura Hispanoaméricana",
      ensayos: 1,
      foto: "https://lh3.googleusercontent.com/a-/ALV-UjVQWiawbqSZSA6y0x7JiETvlRojSd6yZcygeevIRy2-Iv_it29kSdSKKo5U830oCVKQTEyalko5GIRBnAZGNnM8psZwqMhz-otlzSnE0elPDwfEoEb6TyIcJVlikLEagEnF7vxnZr4JmAH_N9ahv4A--EY3igCY-JqhRppbyMZuWa61qRF-NRXOGQpMBqICuTpMxToP-6K7oB7FfnuhF661QyuymFwgd39zQQ8xwggTeBDxEBeNQfELn3ApHj4n4eL1G57ULooEDtWasNy3JmIn-g0KQYjeGtEcpL2wH-9IChZAXeQueLUsH3wKt-4qA4YzC3HM0VCUhdUvgRup8XVHxOxafs0XxLCHkVxYWcWT12rcy5A0_PtfHKmIkg8ktxIQgckgxrurxM98gSU_crbGM-vsEyBF1mZRhurMdYr3CS18TDvnhV8v1PnqNGv2vnq1J9o35kDDzLreRygVAkiqa19IXPgOyzeHPuvgk81DHJy2gyqoDHT_kOE4raYFbGNfljUhLYApFxbc0hvP_BhSlP46Ejr5sV0z3FRdqaHqvdXYmqvwLhhYaEpQqIlfFWMpL60YYE4azzx3HYsLYfmJNB4m3Tdj2FuNCl1uG6xbEXKs9JRWtPL9bvbSJCy_3hyaNBL5ff0y4SUi1MYgo3Efeog0flGyu9bZ5atrwfFqaMSpqyn2HOt9VEUiIb-Qqs8t22IpRJUalQFEwinXvvWS3hZ_i28sRvoH78FWOGwBVMyFeCZ0NmyF1CbLJfwEzpuevG-zEbg5fqlU710EUZC3CW8NHYHR9JWeIR9S4Wv8UUTPgXURuIaFohgRQp6WnwDEKVNmuOQAl4UfXk4P5ucuPEeFxtzJpKPOldcUa0S5aSjDynMzKmqmsigy_rkMnHDZrCkk_F7JyQpV-N0ryxem-CPb9Rz1cClcgAmInf4-EHVPAhHUocos7Mbg3ajBC9AGTLCVqRVCSDHIMLhJI15DBbgYc-viQw=s240-p-k-rw-no",
      descripcion: "Estudiante de 6to Ciclo de Literatura. ",
      color: "from-yellow-700 to-yellow-400",
      redes: {
        instagram: "@bitacoraliteraria04",
        facebook: "Hector Geovanny Cabrera Gonzalez",
        email: "hector.cabrera@unl.edu.ec"
      }
    },
    {
      nombre: "Kenia Zuleica Cedeño Mayorga",
      especialidad: "Literatura Hispanoaméricana",
      ensayos: 1,
      foto: "https://lh3.googleusercontent.com/a-/ALV-UjU7FcoRAscde-X2ab4v5E0dzHeQJ--qkipjyRJ-HIfr98FQRpd-CHJ8qsAcvuu7GuRkLn_yXLJWOAF8Hi_M5XNq8PQmTbuxrNWC5ZizIdpYPnShgvGLIReTg3-tpiIBXab-8klHVlY3aalckUuBLaoQ3VaVBsIdfaqy_Z0Idgiy-hNfgkbUSgydWix4RzNxbaDMNk7PpcqPyo4qIALvqdG6Vl6tgH7YDBt0p2lbkDxHqjPi_kLS-poKqzW88O8h9na5gleGi000B8rukFyeyXy5UrjfKj4h0Hbim4NtJnjnY073HBU6lbOioOfAJPakc67UBGoviLTgK7lW9mVIcUgTtZXr01oVVDS3FW1rhrN0cPBxEI9LvBRs2C5vHV6cVDHTIQwRyf1YuYbChNJ6IQUJLgYy_AxghmrsSw8OwINrnEvRvuPcURZ89-ueW_x-vUPTtr7A7AFmq0OkqUBqaEUP5xZw3TjPYMqhvtCAWgIDb_cfco6vlzCT-m9MVSMHS93V2TcTKqgnitW_v_Wefl_y4KuIsdv5BuzcGxzGJqgo7aKf2xlLfnB4MojM738TOm7Iw-4xzs8WTPgi3UciCIH1UyYqix2_VG6ki7lYPO2Ro6C0_6wzU_qNoYstEULAJ5c0OcqiWoi3-BgfqsXjSz4Ex5RbSYyWsAZU-h6GwGTXUR4RGhNNWk0gBEA8hZQONK8h8Q0myTTtddDSE2vSERE8PspQ-sesIauWgjgBKibBMekQgIgJPUFwXtXRFIfyIkHuigWTpLbJDUSGlmQla2EYEKq63Yylv8R3Gm1e6ec7DIxK9ELiFExOm9DDwst010ldhr13BCkRbdiao2KXsLmQJne46IN38eLoYy--cSNp-iqaWxVjkTOU6rUnj-Dl2TXFkWcXtVEzMHpW6rA0Y7O-Cq1dWV-Qyxexa1oxQfI7Un7rMvhLqJXckBzAaBP2ZKz2nv6st8gdhvMLS-d_FNdSRnaZiXQu=s240-p-k-rw-no",
      descripcion: "Estudiante de 6to Ciclo de Literatura. ",
      color: "from-green-400 to-green-900",
      redes: {
        instagram: "@bitacoraliteraria04",
        facebook: "Kenia Zuleica Cedeño Mayorga",
        email: "kenia.cedeno@unl.edu.ec"
      }
    }
  ];