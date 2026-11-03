// Documentation Engine for S1 Ilmu Hukum Universitas Terbuka
// Scandinavian Design System: Functional, Restrained, High Clarity

document.addEventListener("DOMContentLoaded", function () {
  const DATA = window.WIKI_DATA;
  if (!DATA) {
    console.error("WIKI_DATA is not loaded");
    return;
  }

  // 1. Theme Management (Light / Dark Scandinavian System)
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const storedTheme = localStorage.getItem("ut_doc_theme") || "light";
  document.documentElement.setAttribute("data-theme", storedTheme);
  
  if (themeToggleBtn) {
    themeToggleBtn.textContent = storedTheme === "dark" ? "Mode Terang" : "Mode Gelap";
    themeToggleBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("ut_doc_theme", next);
      themeToggleBtn.textContent = next === "dark" ? "Mode Terang" : "Mode Gelap";
    });
  }

  // 2. Desktop & Mobile Sidebar Navigation Controls (Left & Right Menus)
  const sidebarToggleBtn = document.getElementById("sidebarToggleBtn");
  const docSidebar = document.getElementById("docSidebar");
  const toggleLeftSidebarBtn = document.getElementById("toggleLeftSidebarBtn");
  const hideLeftSidebarInline = document.getElementById("hideLeftSidebarInline");
  const toggleRightSidebarBtn = document.getElementById("toggleRightSidebarBtn");
  const hideRightSidebarInline = document.getElementById("hideRightSidebarInline");

  // Mobile Drawer Toggle
  if (sidebarToggleBtn && docSidebar) {
    sidebarToggleBtn.addEventListener("click", () => {
      docSidebar.classList.toggle("open");
    });

    // Close when clicking an anchor on mobile
    docSidebar.querySelectorAll(".doc-nav-anchor").forEach(a => {
      a.addEventListener("click", () => {
        if (window.innerWidth <= 860) {
          docSidebar.classList.remove("open");
        }
      });
    });
  }

  // Desktop Left & Right Sidebar Hide/Show Toggles
  const isLeftHidden = localStorage.getItem("ut_hide_sidebar_left") === "true";
  const isRightHidden = localStorage.getItem("ut_hide_sidebar_right") === "true";

  if (isLeftHidden) {
    document.body.classList.add("hide-sidebar-left");
    if (toggleLeftSidebarBtn) toggleLeftSidebarBtn.classList.add("is-collapsed");
  }
  if (isRightHidden) {
    document.body.classList.add("hide-sidebar-right");
    if (toggleRightSidebarBtn) toggleRightSidebarBtn.classList.add("is-collapsed");
  }

  function toggleLeftSidebar() {
    const isNowHidden = document.body.classList.toggle("hide-sidebar-left");
    localStorage.setItem("ut_hide_sidebar_left", isNowHidden);
    if (toggleLeftSidebarBtn) {
      toggleLeftSidebarBtn.classList.toggle("is-collapsed", isNowHidden);
    }
  }

  function toggleRightSidebar() {
    const isNowHidden = document.body.classList.toggle("hide-sidebar-right");
    localStorage.setItem("ut_hide_sidebar_right", isNowHidden);
    if (toggleRightSidebarBtn) {
      toggleRightSidebarBtn.classList.toggle("is-collapsed", isNowHidden);
    }
  }

  if (toggleLeftSidebarBtn) toggleLeftSidebarBtn.addEventListener("click", toggleLeftSidebar);
  if (hideLeftSidebarInline) hideLeftSidebarInline.addEventListener("click", toggleLeftSidebar);
  if (toggleRightSidebarBtn) toggleRightSidebarBtn.addEventListener("click", toggleRightSidebar);
  if (hideRightSidebarInline) hideRightSidebarInline.addEventListener("click", toggleRightSidebar);

  // Keyboard Shortcuts for Instant Toggle: [ for left sidebar, ] for right aside
  document.addEventListener("keydown", (e) => {
    if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) return;
    if (e.key === "[") {
      e.preventDefault();
      toggleLeftSidebar();
    } else if (e.key === "]") {
      e.preventDefault();
      toggleRightSidebar();
    }
  });

  // Helper for TBO Direct Links & Purchase Actions
  function getBookPrefix(code) {
    if (!code) return "HKUM";
    const m = code.match(/^[A-Z]+/i);
    return m ? m[0].toUpperCase() : "HKUM";
  }

  function getBaseCode(code) {
    if (!code) return "";
    return code.split("-")[0].trim();
  }

  function renderDirectTBOPurchase(code) {
    const base = getBaseCode(code);
    const prefix = getBookPrefix(base);
    return `
      <div class="doc-tbo-actions">
        <form action="http://tbo.karunika.co.id/check_book" method="POST" target="_blank" style="margin: 0;">
          <input type="hidden" name="kode_barang" value="${base}">
          <button type="submit" class="doc-btn-direct-buy" title="Buka produk ${base} langsung di TBO Karunika">
            <span>Beli di TBO (${base})</span>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </button>
        </form>
        <a href="http://tbo.karunika.co.id/book_list/check/${prefix}" target="_blank" rel="noopener" class="doc-link-category" title="Lihat semua modul seri ${prefix}">
          Seri ${prefix} [↗]
        </a>
      </div>
    `;
  }

  // 3. Render Total Biaya Buku Section & Interactive Semester Detail
  const biayaBukuTableBody = document.getElementById("biayaBukuTableBody");
  const costSemSelector = document.getElementById("costSemSelector");
  const costSemDetailContainer = document.getElementById("costSemDetailContainer");

  function renderBiayaBukuSection() {
    if (!DATA.biaya_buku) return;

    if (biayaBukuTableBody && DATA.biaya_buku.per_semester) {
      biayaBukuTableBody.innerHTML = DATA.biaya_buku.per_semester.map(s => `
        <tr>
          <td style="text-align: center; font-weight: 600;">${s.semester}</td>
          <td><strong>Semester ${s.semester}</strong><br><span style="font-size: 11.5px; color: var(--ink-3);">${s.jumlah_mk} MK (${s.total_sks} SKS)</span></td>
          <td><strong>${s.total_biaya_buku_str}</strong></td>
          <td>${s.spp_nonsipas_str}</td>
          <td><strong style="color: var(--ink);">${s.total_nonsipas_str}</strong></td>
          <td><strong>${s.sipas_nonttm_str}</strong></td>
          <td>
            <span class="doc-badge doc-badge-included">Hemat ${s.selisih_hemat_sipas_str}</span>
          </td>
        </tr>
      `).join("");
    }

    renderSemesterBookDetail(1);
  }

  function renderSemesterBookDetail(semNum) {
    if (!costSemDetailContainer || !DATA.biaya_buku || !DATA.biaya_buku.per_semester) return;
    const semData = DATA.biaya_buku.per_semester.find(s => s.semester === semNum);
    if (!semData) return;

    costSemDetailContainer.innerHTML = `
      <div class="doc-cost-sem-detail-header">
        <div>
          <div class="doc-cost-sem-detail-title">Daftar Modul Wajib Semester ${semData.semester} (${semData.jumlah_mk} Mata Kuliah, ${semData.total_sks} SKS)</div>
          <div style="font-size: 12.5px; color: var(--ink-3); margin-top: 2px;">Wajib dibeli mandiri jika memilih Non-SIPAS. Jika memilih SIPAS, seluruh buku di bawah ini sudah termasuk dan dikirim gratis.</div>
        </div>
        <div class="doc-cost-sem-detail-badge">
          Subtotal Buku: <strong>${semData.total_biaya_buku_str}</strong>
        </div>
      </div>
      <div class="doc-table-wrap" style="margin-top: 12px; background: var(--canvas);">
        <table class="doc-table">
          <thead>
            <tr>
              <th style="width: 110px;">Kode BMP</th>
              <th>Mata Kuliah &amp; Judul Modul</th>
              <th style="width: 75px; text-align: center;">Edisi</th>
              <th style="width: 130px;">Harga Mahasiswa</th>
              <th style="width: 130px;">Status Stok</th>
              <th style="width: 170px;">Pemesanan di TBO</th>
            </tr>
          </thead>
          <tbody>
            ${semData.buku_items.map(item => {
              const isAvailable = item.stok > 0;
              return `
                <tr>
                  <td style="font-family: var(--font-mono); font-weight: 600;">${item.bmp_kode}</td>
                  <td>
                    <strong>${item.nama_mk}</strong> (${item.sks} SKS)<br>
                    <span style="font-size: 12px; color: var(--ink-2);">${item.bmp_judul}</span>
                  </td>
                  <td style="text-align: center;">Edisi ${item.edisi}</td>
                  <td><strong>${item.harga_str}</strong></td>
                  <td>
                    <span class="doc-badge" style="border-color: ${isAvailable ? 'var(--line)' : 'var(--line-strong)'};">
                      ${isAvailable ? `Tersedia (${item.stok})` : 'Stok Habis (0)'}
                    </span>
                  </td>
                  <td>
                    ${renderDirectTBOPurchase(item.bmp_kode)}
                  </td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  if (costSemSelector) {
    const costBtns = costSemSelector.querySelectorAll(".cost-sem-btn");
    costBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        costBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const sem = parseInt(btn.getAttribute("data-sem"), 10);
        renderSemesterBookDetail(sem);
      });
    });
  }

  renderBiayaBukuSection();

  // 4. Render 49 Courses with Complete BMP Mapping & Direct Links
  const kurikulumTableBody = document.getElementById("kurikulumTableBody");
  const semFilterBtns = document.querySelectorAll(".sem-btn");
  const courseSearchInput = document.getElementById("courseSearchInput");
  const courseCounter = document.getElementById("courseCounter");

  let activeSemester = "all";

  function renderKurikulumBMP() {
    if (!kurikulumTableBody || !DATA.kurikulum_bmp) return;
    const query = (courseSearchInput ? courseSearchInput.value : "").toLowerCase().trim();

    const filtered = DATA.kurikulum_bmp.filter(c => {
      if (activeSemester !== "all" && c.semester.toString() !== activeSemester) {
        return false;
      }
      if (query) {
        const text = `${c.kode_mk} ${c.nama_mk} ${c.bmp_kode} ${c.bmp_judul} ${c.companion_guide || ""}`.toLowerCase();
        return text.includes(query);
      }
      return true;
    });

    if (courseCounter) {
      courseCounter.textContent = `Menampilkan ${filtered.length} dari 49 mata kuliah`;
    }

    if (filtered.length === 0) {
      kurikulumTableBody.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 2rem; color: var(--ink-3);">Tidak ditemukan mata kuliah atau buku yang cocok dengan kata kunci pencarian.</td></tr>`;
      return;
    }

    kurikulumTableBody.innerHTML = filtered.map(c => {
      const isPraktik = c.praktik && c.praktik !== "-";
      const isPrereq = c.catatan && c.catatan.includes("PRASYARAT");
      const isBullet = c.catatan && c.catatan.includes("PELURU");

      let metaBadges = [];
      if (isPraktik) metaBadges.push(`<span class="doc-badge" style="border-color: var(--line-strong);">Praktik</span>`);
      if (isPrereq) metaBadges.push(`<span class="doc-badge" style="border-color: var(--line-strong);">Prasyarat TAP</span>`);
      if (isBullet) metaBadges.push(`<span class="doc-badge" style="border-color: var(--line-strong); font-weight: 600;">Program Peluru</span>`);

      return `
        <tr>
          <td style="text-align: center; font-weight: 600;">${c.semester}</td>
          <td>
            <strong>${c.kode_mk}</strong><br>
            <span style="font-size: 11.5px; color: var(--ink-3);">Waktu Ujian: ${c.waktu_ujian}</span>
          </td>
          <td>
            <strong>${c.nama_mk}</strong> (${c.sks} SKS)
            ${metaBadges.length ? `<div style="margin-top: 4px; display: flex; gap: 4px; flex-wrap: wrap;">${metaBadges.join("")}</div>` : ""}
          </td>
          <td>
            <span class="doc-badge" style="font-family: var(--font-mono); font-weight: 600;">${c.bmp_kode}</span><br>
            <div style="margin-top: 2px;"><strong>${c.bmp_judul}</strong></div>
            ${c.companion_guide ? `<div style="margin-top: 4px; font-size: 12px; color: var(--ink-2); border-left: 2px solid var(--line-strong); padding-left: 6px;"><em>Panduan Praktik:</em> ${c.companion_guide}</div>` : ""}
          </td>
          <td style="white-space: nowrap;">
            <strong>${c.bmp_harga}</strong><br>
            <span style="font-size: 12px; color: var(--ink-3);">Stok TBO: ${c.bmp_stok}</span>
          </td>
          <td>
            <span class="doc-badge doc-badge-included">SIPAS: Termasuk UKT</span><br>
            <span style="font-size: 12px; color: var(--ink-3);">${c.sipas_info || "Modul cetak otomatis dikirim gratis ke alamat"}</span>
          </td>
          <td>
            <span class="doc-badge doc-badge-buy" style="margin-bottom: 6px;">Non-SIPAS: Wajib Beli</span>
            ${renderDirectTBOPurchase(c.bmp_kode)}
          </td>
        </tr>
      `;
    }).join("");
  }

  semFilterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      semFilterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeSemester = btn.getAttribute("data-sem");
      renderKurikulumBMP();
    });
  });

  if (courseSearchInput) {
    courseSearchInput.addEventListener("input", renderKurikulumBMP);
  }

  renderKurikulumBMP();

  // 5. Render All 62 Books in TBO Karunika Catalog with Direct Links
  const tboTableBody = document.getElementById("tboTableBody");
  const tboSearchInput = document.getElementById("tboSearchInput");

  function renderTBO() {
    if (!tboTableBody || !DATA.tbo_books) return;
    const q = (tboSearchInput ? tboSearchInput.value : "").toLowerCase().trim();

    const filtered = DATA.tbo_books.filter(b => {
      if (!q) return true;
      return `${b.kode} ${b.judul}`.toLowerCase().includes(q);
    });

    if (filtered.length === 0) {
      tboTableBody.innerHTML = `<tr><td colspan="6" style="text-align: center; padding: 1.5rem; color: var(--ink-3);">Buku tidak ditemukan di katalog TBO Karunika.</td></tr>`;
      return;
    }

    tboTableBody.innerHTML = filtered.map(b => {
      const isAvailable = b.stok > 0;
      return `
        <tr>
          <td style="font-family: var(--font-mono); font-weight: 600;">${b.kode}</td>
          <td><strong>${b.judul}</strong></td>
          <td style="text-align: center;">Edisi ${b.edisi}</td>
          <td style="font-weight: 600;">${b.harga_mhs_str || `Rp ${b.harga_mhs.toLocaleString("id-ID")}`}</td>
          <td>
            <span class="doc-badge" style="border-color: ${isAvailable ? 'var(--line)' : 'var(--line-strong)'};">
              ${isAvailable ? `Tersedia (${b.stok})` : 'Stok Habis (0)'}
            </span>
          </td>
          <td>
            ${renderDirectTBOPurchase(b.kode)}
          </td>
        </tr>
      `;
    }).join("");
  }

  if (tboSearchInput) {
    tboSearchInput.addEventListener("input", renderTBO);
  }

  renderTBO();

  // 6. Render Academic Calendar Table
  const calendarTableBody = document.getElementById("calendarTableBody");
  const calendarSearchInput = document.getElementById("calendarSearchInput");

  function renderCalendar() {
    if (!calendarTableBody || !DATA.kalender_akademik) return;
    const q = (calendarSearchInput ? calendarSearchInput.value : "").toLowerCase().trim();

    const filtered = DATA.kalender_akademik.filter(item => {
      if (!q) return true;
      return `${item.category} ${item.activity} ${item.ganjil} ${item.genap}`.toLowerCase().includes(q);
    });

    if (filtered.length === 0) {
      calendarTableBody.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 1.5rem; color: var(--ink-3);">Agenda tidak ditemukan.</td></tr>`;
      return;
    }

    calendarTableBody.innerHTML = filtered.map(item => `
      <tr>
        <td style="font-weight: 600;">${item.category}</td>
        <td>${item.activity}</td>
        <td>${item.ganjil || '–'}</td>
        <td>${item.genap || '–'}</td>
      </tr>
    `).join("");
  }

  if (calendarSearchInput) {
    calendarSearchInput.addEventListener("input", renderCalendar);
  }

  renderCalendar();

  // 7. Render 40 UPBJJ Offices
  const upbjjTableBody = document.getElementById("upbjjTableBody");
  const upbjjSearchInput = document.getElementById("upbjjSearchInput");

  function renderUPBJJ() {
    if (!upbjjTableBody || !DATA.upbjj) return;
    const q = (upbjjSearchInput ? upbjjSearchInput.value : "").toLowerCase().trim();

    const filtered = DATA.upbjj.filter(u => {
      if (!q) return true;
      return `${u.no} ${u.nama} ${u.alamat} ${u.telp || ''} ${u.email || ''} ${u.web || ''}`.toLowerCase().includes(q);
    });

    if (filtered.length === 0) {
      upbjjTableBody.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 1.5rem; color: var(--ink-3);">Kantor UT tidak ditemukan.</td></tr>`;
      return;
    }

    upbjjTableBody.innerHTML = filtered.map(u => `
      <tr>
        <td style="text-align: center; font-weight: 600;">${u.no}</td>
        <td><strong>UT ${u.nama}</strong></td>
        <td>${u.alamat}</td>
        <td>
          <div><strong>Telp:</strong> ${u.telp || '–'}</div>
          ${u.email ? `<div style="margin-top: 3px;"><strong>Email:</strong> <a href="mailto:${u.email}">${u.email}</a></div>` : ''}
          ${u.web ? `<div style="margin-top: 3px;"><strong>Web:</strong> <a href="https://${u.web}" target="_blank" rel="noopener">${u.web} [↗]</a></div>` : ''}
        </td>
      </tr>
    `).join("");
  }

  if (upbjjSearchInput) {
    upbjjSearchInput.addEventListener("input", renderUPBJJ);
  }

  renderUPBJJ();

  // 8. Render FAQ Items
  const faqContainer = document.getElementById("faqContainer");
  if (faqContainer && DATA.faq) {
    faqContainer.innerHTML = DATA.faq.map(item => `
      <div class="doc-callout" style="margin: 16px 0;">
        <div class="doc-callout-title">${item.q}</div>
        <p style="margin-top: 4px; font-size: 14.5px; line-height: 1.6;">${item.a}</p>
      </div>
    `).join("");
  }

  // 9. Interactive UKT Simulator
  const calcTrackButtons = document.querySelectorAll(".calc-track-btn");
  const calcSemCost = document.getElementById("calcSemCost");
  const calcTotalCost = document.getElementById("calcTotalCost");
  const calcInclusions = document.getElementById("calcInclusions");
  const nonSipasControls = document.getElementById("nonSipasControls");
  const sksRange = document.getElementById("sksRange");
  const sksVal = document.getElementById("sksVal");

  let currentTrack = "non_ttm";
  let nonSipasCount = 20;

  function updateCalc() {
    const fee = DATA.biaya[currentTrack];
    if (!fee) return;

    if (currentTrack === "non_sipas") {
      if (nonSipasControls) nonSipasControls.style.display = "block";
      const semTotal = nonSipasCount * fee.tarif_per_sks;
      const totalAll = 145 * fee.tarif_per_sks;
      if (calcSemCost) calcSemCost.textContent = `Rp ${semTotal.toLocaleString("id-ID")} (${nonSipasCount} SKS @ Rp 40.000)`;
      if (calcTotalCost) calcTotalCost.textContent = `Rp ${totalAll.toLocaleString("id-ID")} (Estimasi 145 SKS SPP saja, buku beli mandiri)`;
    } else {
      if (nonSipasControls) nonSipasControls.style.display = "none";
      if (calcSemCost) calcSemCost.textContent = `Rp ${fee.tarif.toLocaleString("id-ID")}`;
      if (calcTotalCost) calcTotalCost.textContent = `Rp ${(fee.tarif * 8).toLocaleString("id-ID")} (8 Semester)`;
    }

    if (calcInclusions) {
      calcInclusions.innerHTML = fee.rincian.map(r => `<li>${r}</li>`).join("");
    }
  }

  calcTrackButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      calcTrackButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentTrack = btn.getAttribute("data-track");
      updateCalc();
    });
  });

  if (sksRange && sksVal) {
    sksRange.addEventListener("input", (e) => {
      nonSipasCount = parseInt(e.target.value, 10);
      sksVal.textContent = nonSipasCount + " SKS";
      updateCalc();
    });
  }

  updateCalc();

  // 10. Global Header Search (Jumps to Section & Filters Courses)
  const globalDocSearch = document.getElementById("globalDocSearch");
  if (globalDocSearch) {
    globalDocSearch.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const val = globalDocSearch.value.toLowerCase().trim();
        if (!val) return;
        if (courseSearchInput) {
          courseSearchInput.value = val;
          renderKurikulumBMP();
          const target = document.getElementById("kurikulum-bmp");
          if (target) target.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  }

  // 11. ScrollSpy for Sidebar & Aside Links
  const chapters = document.querySelectorAll("section[id]");
  const sidebarLinks = document.querySelectorAll(".doc-nav-anchor");
  const asideLinks = document.querySelectorAll(".doc-aside-item a");

  function updateScrollSpy() {
    let currentId = "";
    const scrollPos = window.scrollY + 100;

    chapters.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute("id");
      }
    });

    if (currentId) {
      sidebarLinks.forEach(link => {
        const href = link.getAttribute("href").replace("#", "");
        if (href === currentId) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });

      asideLinks.forEach(link => {
        const href = link.getAttribute("href").replace("#", "");
        if (href === currentId) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  }

  window.addEventListener("scroll", updateScrollSpy, { passive: true });
});
