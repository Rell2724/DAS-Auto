  document
    .getElementById("calculationForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      // mengambil nilai input
      const hargaMobil = parseFloat(document.getElementById("harga-mobil").value);
      const dpinpercent = parseFloat(
        document.getElementById("dpinpercent").value
      );
      const tenor = parseFloat(document.getElementById("tenor").value);

      // variable untuk perhitungan
      const bunga = 0.2; // 20% interest rate
      const dp = (dpinpercent / 100) * hargaMobil;
      const bungaTotal = hargaMobil * bunga;
      const tenorbulan = tenor * 12;
      const totalPinjaman = hargaMobil + bungaTotal - dp;
      const angsuranPerBulan = totalPinjaman / (tenor * 12);

      // format mata uang
      const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });

      // Hitung dan tampilkan hasil
      document.getElementById("hasil-harga").value = formatter.format(hargaMobil);
      document.getElementById("hasil-dp").value =
        formatter.format(dp) + ` (${dpinpercent}%)`;
      document.getElementById("hasil-tenor").value =
        `${tenor} Tahun` + ` (${tenorbulan} Bulan)`;
      document.getElementById("hasil-bunga").value = "20%";
      document.getElementById("hasil-angsuran").value =
        formatter.format(angsuranPerBulan) + " / Bulan";

      // Menampilkan hasil setelah dihitung
      document.getElementById("results-section").style.display = "block";

      // Smooth scroll
      document
        .getElementById("results-section")
        .scrollIntoView({ behavior: "smooth" });
    });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const offset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        document
          .querySelectorAll(".nav-item a")
          .forEach((link) => link.classList.remove("active"));
        this.classList.add("active");
      }
    });
  });
