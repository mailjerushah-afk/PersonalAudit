import React from "react";

export const styles = {
    page: {
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#f7f9fc",
        fontFamily: "Arial, sans-serif",
        padding: "40px",
        boxSizing: "border-box"
    } as React.CSSProperties,

leftPanel: {
  flex: 1,
  minHeight: "100vh",
  background: "linear-gradient(135deg, #0288d1, #26c6da)",
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "60px",
  textAlign: "center"
} as React.CSSProperties,

rightPanel: {
  flex: 1,
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f7f9fc",
  padding: "40px"
} as React.CSSProperties,

  card: {
    width: "100%",
    maxWidth: "420px",
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
    textAlign: "center",
  } as React.CSSProperties,

  title: {
    marginBottom: "10px",
    color: "#0277bd",
  } as React.CSSProperties,

  subtitle: {
    marginBottom: "30px",
    color: "#666",
  } as React.CSSProperties,

  primaryButton: {
    width: "100%",
    padding: "14px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#0288d1",
    color: "white",
    fontWeight: 600,
    fontSize: "16px",
    cursor: "pointer",
    marginBottom: "20px",
  } as React.CSSProperties,

  secondaryButton: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "2px solid #0288d1",
    backgroundColor: "white",
    color: "#0288d1",
    fontWeight: 600,
    cursor: "pointer",
  } as React.CSSProperties,

  footerText: {
    marginBottom: "12px",
    color: "#666",
    fontSize: "14px",
  } as React.CSSProperties,
    input: {
    width: "100%",
    padding: "12px",
    marginBottom: "16px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "14px",
  } as React.CSSProperties,

  divider: {
    height: "1px",
    backgroundColor: "#e0e0e0",
    margin: "24px 0",
  } as React.CSSProperties,
  userGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  } as React.CSSProperties,
  grid:{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
gap:"20px"
} as React.CSSProperties,

  userCard: {
    padding: "20px",
    borderRadius: "12px",
    backgroundColor: "#f5fbff",
    //display: "flex",
    flexDirection: "column",
    gap: "6px",
    boxShadow: "0 5px 12px rgba(0,0,0,0.05)",
  } as React.CSSProperties,

container: {
  width: "100%",
  maxWidth: "1400px",
  margin: "0 auto",
  backgroundColor: "white",
  padding: "40px",
  borderRadius: "20px",
  boxShadow: "0 15px 40px rgba(0,0,0,0.08)"
} as React.CSSProperties,

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
  } as React.CSSProperties,
    logoutButton: {
    padding: "10px 18px",
    borderRadius: "8px",
    border: "2px solid #0288d1",
    backgroundColor: "white",
    color: "#0288d1",
    fontWeight: 600,
    cursor: "pointer",
  } as React.CSSProperties,
  layout: {
  display: "flex",
  width: "100%",
  minHeight: "100vh"
} as React.CSSProperties,

sectionTitle: {
  marginBottom: "20px",
  color: "#444",
} as React.CSSProperties,

  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "30px"
  } as React.CSSProperties,

   button: {
    background: "#2563eb",
    border: "none",
    padding: "10px 18px",
    color: "white",
    borderRadius: "6px",
    cursor: "pointer"
  } as React.CSSProperties,


budgetCard:{
border:"1px solid #ddd",
padding:"15px",
borderRadius:"8px",
marginBottom:"20px"
} as React.CSSProperties,

progressBar:{
height:"20px",
background:"#eee",
borderRadius:"5px",
overflow:"hidden"
} as React.CSSProperties,
flexRow:{
display:"flex",
gap:"10px",
flexWrap:"wrap"
} as React.CSSProperties,
  dashboardGrid: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
  gap: "25px",
  marginBottom: "30px"
} as React.CSSProperties,

dashboardCard: {
  backgroundColor: "white",
  padding: "25px",
  borderRadius: "16px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
} as React.CSSProperties,

calendarCard: {
  flex: 2,
  background: "white",
  padding: "25px",
  borderRadius: "16px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  minWidth: "320px"
} as React.CSSProperties,

alertCard: {
  flex: 1,
  background: "linear-gradient(135deg, #0288d1, #26c6da)",
  color: "white",
  padding: "25px",
  borderRadius: "16px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  minWidth: "280px"
} as React.CSSProperties,

alertItem: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "rgba(255,255,255,0.15)",
  padding: "12px 16px",
  borderRadius: "10px",
  marginBottom: "12px",
  backdropFilter: "blur(6px)"
} as React.CSSProperties,

amountTag: {
  background: "white",
  color: "#0288d1",
  padding: "6px 10px",
  borderRadius: "8px",
  fontWeight: 600
} as React.CSSProperties

};
